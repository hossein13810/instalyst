import os.path
from io import BytesIO

import requests
from django.conf import settings
from django.core.files.uploadedfile import InMemoryUploadedFile
from requests.adapters import HTTPAdapter
from urllib3 import Retry

from targets_app.models import TargetFollowersData, TargetsData


# --------------------------------------------------------------------------------------------------------------
# scrap target followers data
def scrap_target_followers_data(api_auth_data, target_instagram_id, img_download):
    url = 'https://boxapi.ir/api/instagram/user/get_followers'

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
            yield f"<div class='analyze_color_6'>Fetched <span class='analyze_color_4'>{len(response['users'])}</span> followers</div>"
            max_id = response['next_max_id']
            if max_id == '':
                break_set = True
            for follower in response['users']:
                yield f"<div class='font_1 analyze_color_2'>{'-' * 70}</div><div class='analyze_color_6'><span class='analyze_color_5'>[<span class='analyze_color_4'> {counter_number} </span>]</span> scrap follower: <span class='analyze_color_3'>{follower['id']}</span> data</div>"
                if not TargetFollowersData.objects.filter(instagram_id=follower['id'], target_db_data=TargetsData.objects.get(instagram_id=target_instagram_id)).exists():
                    new_follower_db_data = TargetFollowersData.objects.create(instagram_id=follower['id'],
                                                                              username=follower['username'],
                                                                              full_name=follower['full_name'],
                                                                              is_private=follower['is_private'],
                                                                              is_verified=follower['is_verified'],
                                                                              profile_pic_url=follower['profile_pic_url'],
                                                                              target_db_data=TargetsData.objects.get(instagram_id=target_instagram_id))

                    if img_download == 'True':
                        yield f"<div class='analyze_color_5'>Downloading follower profile image ...</div>"
                        profile_pic_filename = f'{follower["id"]}.jpg'
                        profile_pic_path = os.path.join(settings.BASE_DIR, f'files/profile_images/{profile_pic_filename}').replace('\\', '/')

                        if not os.path.exists(profile_pic_path):
                            response = session.get(follower['profile_pic_url'], timeout=(10, 30))
                            image_data = BytesIO(response.content)
                            image_file = InMemoryUploadedFile(
                                image_data, None, profile_pic_filename, 'image/jpeg', response.content, None
                            )
                            new_follower_db_data.profile_image.save(profile_pic_filename, image_file)
                        else:
                            new_follower_db_data.profile_image = profile_pic_path.split('/files/')[1]

                        new_follower_db_data.save()

                counter_number += 1
        else:
            yield 'error'
            return 'error'

    yield f"<div class='font_1 analyze_color_2'>{'-' * 70}</div><div class='analyze_color_1'>Data for <span class='analyze_color_6'>{counter_number}</span> followers was successfully extracted.</div><div class='font_1 analyze_color_2'>{'-' * 70}</div>"
