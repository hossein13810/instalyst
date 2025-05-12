import datetime
import os
from io import BytesIO

import requests
from django.conf import settings
from django.core.files.uploadedfile import InMemoryUploadedFile
from requests.adapters import HTTPAdapter
from urllib3 import Retry

from targets_app.models import TargetPostCommentsData


# --------------------------------------------------------------------------------------------------------------
# scrap target posts comments
def scrap_target_post_comments_data(api_auth_data, new_post_db_data):
    url = 'https://boxapi.ir/api/instagram/media/get_comments'

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

    min_id = None
    break_set = False
    counter_number = 1
    while True:
        if break_set:
            break
        data = {
            'id': new_post_db_data.post_pk,
            'min_id': min_id
        }

        response = session.post(url, json=data, auth=api_auth_data, timeout=(10, 30))

        if response.status_code == 200:

            response = response.json()['response']['body']
            yield f"<div class='analyze_color_6'>Fetched <span class='analyze_color_4'>{len(response['comments'])}</span> comments</div>"
            if 'next_min_id' in response.keys():
                min_id = response['next_min_id']
            else:
                break_set = True

            for comment in response['comments']:
                created_at = str(datetime.datetime.fromtimestamp(comment['created_at']))
                if not TargetPostCommentsData.objects.filter(instagram_pk=comment['pk'], post_db_data=new_post_db_data).exists():
                    yield f"<div class='analyze_color_6'><span class='analyze_color_3'>[<span class='analyze_color_7'> {counter_number} </span>]</span> scrap commenter: <span class='analyze_color_3'>{comment['pk']}</span> data</div>"
                    new_post_comment_db_data = TargetPostCommentsData.objects.create(instagram_pk=comment['pk'],
                                                                                     instagram_id=comment['user']['id'],
                                                                                     username=comment['user']['username'],
                                                                                     full_name=comment['user']['full_name'],
                                                                                     is_private=comment['user']['is_private'],
                                                                                     is_verified=comment['user']['is_verified'],
                                                                                     did_report_as_spam=comment['did_report_as_spam'],
                                                                                     created_at=created_at,
                                                                                     share_enabled=comment['share_enabled'],
                                                                                     text=comment['text'],
                                                                                     comment_like_count=comment['comment_like_count'],
                                                                                     profile_pic_url=comment['user']['profile_pic_url'],
                                                                                     post_db_data=new_post_db_data)

                    profile_pic_filename = f'{comment["user"]["id"]}.jpg'
                    profile_pic_path = os.path.join(settings.BASE_DIR, f'files/profile_images/{profile_pic_filename}').replace('\\', '/')

                    if not os.path.exists(profile_pic_path):
                        response = session.get(comment['user']['profile_pic_url'], timeout=(10, 30))
                        image_data = BytesIO(response.content)
                        image_file = InMemoryUploadedFile(
                            image_data, None, profile_pic_filename, 'image/jpeg', response.content, None
                        )
                        new_post_comment_db_data.profile_image.save(profile_pic_filename, image_file)
                    else:
                        new_post_comment_db_data.profile_image = profile_pic_path.split('/files/')[1]

                    new_post_comment_db_data.save()
                counter_number += 1
        else:
            yield 'error'
            return 'error'

    yield f"<div class='font_1 analyze_color_2'>{'-' * 70}</div><div class='analyze_color_1'>Post: <span class='analyze_color_7'>{counter_number}</span> comments data was successfully extracted.</div><div class='font_1 analyze_color_2'>{'-' * 70}</div>"
