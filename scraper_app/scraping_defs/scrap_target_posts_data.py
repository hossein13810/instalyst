import datetime
from io import BytesIO

import requests
from django.core.files.uploadedfile import InMemoryUploadedFile
from requests.adapters import HTTPAdapter
from urllib3 import Retry

from scraper_app.scraping_defs.scrap_target_post_comments_data import scrap_target_post_comments_data
from scraper_app.scraping_defs.scrap_target_post_likes_data import scrap_target_post_likes_data
from targets_app.models import TargetPostsData, TargetsData, TargetPostsContentsData


# --------------------------------------------------------------------------------------------------------------
# scrap target posts data
def scrap_target_posts_data(api_auth_data, target_instagram_id, post_download, post_likes, post_comments):
    url = 'https://boxapi.ir/api/instagram/user/get_media'

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
            'count': 12,
            'max_id': max_id
        }

        response = session.post(url, json=data, auth=api_auth_data, timeout=(10, 30))

        if response.status_code == 200:
            response = response.json()['response']['body']

            yield f"<div class='analyze_color_6'>Fetched <span class='analyze_color_4'>{len(response['items'])}</span> posts</div>"

            if 'next_max_id' in response.keys():
                max_id = response['next_max_id']
            else:
                break_set = True

            for post in response['items']:
                yield f"<div class='font_1 analyze_color_2'>{'-' * 70}</div><div class='analyze_color_6'><span class='analyze_color_5'>[<span class='analyze_color_4'> {counter_number} </span>]</span> scrap post: <span class='analyze_color_3'>{post['pk']}</span> data</div>"

                caption_text = None
                if post['caption'] is not None:
                    caption_text = post['caption']['text']

                taken_at = str(datetime.datetime.fromtimestamp(post['taken_at']))
                if not TargetPostsData.objects.filter(post_pk=post['pk'], target_db_data=TargetsData.objects.get(instagram_id=target_instagram_id)).exists():
                    new_post_db_data = TargetPostsData.objects.create(taken_at=taken_at,
                                                                      post_pk=post['pk'],
                                                                      post_id=post['id'],
                                                                      caption_is_edited=post['caption_is_edited'],
                                                                      share_count_disabled=post['share_count_disabled'],
                                                                      like_and_view_counts_disabled=post['like_and_view_counts_disabled'],
                                                                      is_quiet_post=post['is_quiet_post'],
                                                                      has_privately_liked=post['has_privately_liked'],
                                                                      code=post['code'],
                                                                      caption=caption_text,
                                                                      can_reply=post['can_reply'],
                                                                      comment_count=post['comment_count'],
                                                                      like_count=post['like_count'],
                                                                      can_viewer_save=post['can_viewer_save'],
                                                                      can_viewer_reshare=post['can_viewer_reshare'],
                                                                      target_db_data=TargetsData.objects.get(instagram_id=target_instagram_id))
                    # download post content
                    if post_download == 'True':
                        yield f"<div class='analyze_color_5'>Downloading post contents ...</div>"
                        response = session.get(post['image_versions2']['candidates'][0]['url'], timeout=(10, 30))
                        image_data = BytesIO(response.content)
                        image_file = InMemoryUploadedFile(image_data, None, 'image.jpg', 'image/jpeg', response.content, None)
                        new_post_db_data.cover_image.save(f'{post["pk"]}.jpg', image_file)

                        if 'carousel_media' in post.keys():
                            for item in post['carousel_media']:
                                if 'video_versions' not in item.keys():
                                    response = session.get(item['image_versions2']['candidates'][0]['url'], timeout=(10, 30))
                                    image_data = BytesIO(response.content)
                                    image_file = InMemoryUploadedFile(image_data, None, 'image.jpg', 'image/jpeg', response.content, None)
                                    TargetPostsContentsData.objects.create(content_file=image_file, post_db_data=new_post_db_data)
                                else:
                                    response = session.get(item['video_versions'][0]['url'], timeout=(10, 30))
                                    video_data = BytesIO(response.content)
                                    video_file = InMemoryUploadedFile(video_data, None, 'video.mp4', 'video/mp4', response.content, None)
                                    TargetPostsContentsData.objects.create(content_file=video_file, post_db_data=new_post_db_data)
                        elif 'video_versions' in post.keys():
                            response = session.get(post['video_versions'][0]['url'], timeout=(10, 30))
                            video_data = BytesIO(response.content)
                            video_file = InMemoryUploadedFile(video_data, None, 'video.mp4', 'video/mp4', response.content, None)
                            TargetPostsContentsData.objects.create(content_file=video_file, post_db_data=new_post_db_data)
                        else:
                            TargetPostsContentsData.objects.create(content_file=image_file, post_db_data=new_post_db_data)

                    # download post likes data
                    if post_likes == 'True':
                        yield f"<div class='analyze_color_5'>Downloading post: <span class='analyze_color_4'>{post['pk']}</span> likes data ...</div>"
                        yield from scrap_target_post_likes_data(api_auth_data=api_auth_data, new_post_db_data=new_post_db_data)

                    # download post comments data
                    if post_comments == 'True':
                        yield f"<div class='analyze_color_5'>Downloading post: <span class='analyze_color_4'>{post['pk']}</span> comments data ...</div>"
                        yield from scrap_target_post_comments_data(api_auth_data=api_auth_data, new_post_db_data=new_post_db_data)
                counter_number += 1
        else:
            yield 'error'
            return 'error'

    yield f"<div class='font_1 analyze_color_2'>{'-' * 70}</div><div class='analyze_color_1'>Data for <span class='analyze_color_6'>{counter_number}</span> posts was successfully extracted.</div><div class='font_1 analyze_color_2'>{'-' * 70}</div>"
