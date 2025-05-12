import os
from io import BytesIO

import requests
from django.conf import settings
from django.core.files.uploadedfile import InMemoryUploadedFile
from requests.adapters import HTTPAdapter
from urllib3 import Retry

from targets_app.models import TargetsData, TargetFollowingsData


# --------------------------------------------------------------------------------------------------------------
# scrap target followings data
def scrap_target_followings_data(api_auth_data, target_instagram_id, img_download):
    url = 'https://boxapi.ir/api/instagram/user/get_following'

    session = requests.Session()

    retry = Retry(
        total=5,
        backoff_factor=1,
        status_forcelist=[500, 502, 503, 504],
        allowed_methods=["GET", "POST"]
    )

    adapter = HTTPAdapter(max_retries=retry)
    session.mount("https://", adapter)
    session.mount("http://", adapter)

    max_id = None
    break_set = False
    counter_number = 1
    while True:
        if break_set:
            break
        data = {
            'id': int(target_instagram_id),
            'count': 50,
            'max_id': max_id
        }

        response = session.post(url, json=data, auth=api_auth_data, timeout=(10, 30))

        if response.status_code == 200:
            response = response.json()['response']['body']
            yield f"<div class='analyze_color_6'>Fetched <span class='analyze_color_4'>{len(response['users'])}</span> followings</div>"
            max_id = response['next_max_id']
            if max_id == '':
                break_set = True
            for following in response['users']:
                yield f"<div class='font_1 analyze_color_2'>{'-' * 70}</div><div class='analyze_color_6'><span class='analyze_color_5'>[<span class='analyze_color_4'> {counter_number} </span>]</span> scrap following: <span class='analyze_color_3'>{following['id']}</span> data</div>"
                if not TargetFollowingsData.objects.filter(instagram_id=following['id'], target_db_data=TargetsData.objects.get(instagram_id=target_instagram_id)).exists():
                    new_following_db_data = TargetFollowingsData.objects.create(instagram_id=following['id'],
                                                                                username=following['username'],
                                                                                full_name=following['full_name'],
                                                                                is_private=following['is_private'],
                                                                                is_verified=following['is_verified'],
                                                                                profile_pic_url=following['profile_pic_url'],
                                                                                target_db_data=TargetsData.objects.get(instagram_id=target_instagram_id))

                    if img_download == 'True':
                        yield f"<div class='analyze_color_5'>Downloading following profile image ...</div>"
                        profile_pic_filename = f'{following["id"]}.jpg'
                        profile_pic_path = os.path.join(settings.BASE_DIR, f'files/profile_images/{profile_pic_filename}').replace('\\', '/')

                        if not os.path.exists(profile_pic_path):
                            response = session.get(following['profile_pic_url'], timeout=(10, 30))
                            image_data = BytesIO(response.content)
                            image_file = InMemoryUploadedFile(
                                image_data, None, profile_pic_filename, 'image/jpeg', response.content, None
                            )
                            new_following_db_data.profile_image.save(profile_pic_filename, image_file)
                        else:
                            new_following_db_data.profile_image = profile_pic_path.split('/files/')[1]

                        new_following_db_data.save()

                counter_number += 1
        else:
            yield 'error'
            return 'error'

    yield f"<div class='font_1 analyze_color_2'>{'-' * 70}</div><div class='analyze_color_1'>Data for <span class='analyze_color_6'>{counter_number}</span> followings was successfully extracted.</div><div class='font_1 analyze_color_2'>{'-' * 70}</div>"
