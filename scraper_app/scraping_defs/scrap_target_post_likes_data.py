import os
from io import BytesIO

import requests
from django.conf import settings
from django.core.files.uploadedfile import InMemoryUploadedFile
from requests.adapters import HTTPAdapter
from urllib3 import Retry

from targets_app.models import TargetPostLikesData


# --------------------------------------------------------------------------------------------------------------
# scrap target post likes data
def scrap_target_post_likes_data(api_auth_data, new_post_db_data):
    url = 'https://boxapi.ir/api/instagram/media/get_likes_by_shortcode'

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

    data = {
        'shortcode': new_post_db_data.code
    }

    response = session.post(url, json=data, auth=api_auth_data, timeout=(10, 30))

    if response.status_code == 200:
        response = response.json()['response']['body']['users']
        yield f"<div class='font_1 analyze_color_2'>{'-' * 70}</div><div class='analyze_color_5'>Total number of likes: <span class='analyze_color_4'>{len(response)}</span></div>"
        counter_number = 1
        for user in response:
            if not TargetPostLikesData.objects.filter(instagram_id=user['id'], post_db_data=new_post_db_data).exists():
                yield f"<div class='analyze_color_6'><span class='analyze_color_3'>[<span class='analyze_color_7'> {counter_number} </span>]</span> scrap liker: <span class='analyze_color_3'>{user['id']}</span> data</div>"
                new_post_like_db_data = TargetPostLikesData.objects.create(instagram_pk=user['pk'],
                                                                           instagram_id=user['id'],
                                                                           username=user['username'],
                                                                           full_name=user['full_name'],
                                                                           is_private=user['is_private'],
                                                                           is_verified=user['is_verified'],
                                                                           profile_pic_url=user['profile_pic_url'],
                                                                           is_new=user['is_new'],
                                                                           post_db_data=new_post_db_data)

                profile_pic_filename = f'{user["id"]}.jpg'
                profile_pic_path = os.path.join(settings.BASE_DIR, f'files/profile_images/{profile_pic_filename}').replace('\\', '/')

                if not os.path.exists(profile_pic_path):
                    response = session.get(user['profile_pic_url'], timeout=(10, 30))
                    image_data = BytesIO(response.content)
                    image_file = InMemoryUploadedFile(
                        image_data, None, profile_pic_filename, 'image/jpeg', response.content, None
                    )
                    new_post_like_db_data.profile_image.save(profile_pic_filename, image_file)
                else:
                    new_post_like_db_data.profile_image = profile_pic_path.split('/files/')[1]

                new_post_like_db_data.save()

            counter_number += 1

        yield f"<div class='font_1 analyze_color_2'>{'-' * 70}</div><div class='analyze_color_1'>Post: <span class='analyze_color_7'>{new_post_db_data.post_pk}</span> likes data was successfully extracted.</div><div class='font_1 analyze_color_2'>{'-' * 70}</div>"
    else:
        yield 'error'
        return 'error'
