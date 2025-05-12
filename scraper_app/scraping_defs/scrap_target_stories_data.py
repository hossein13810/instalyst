import datetime
from io import BytesIO

import requests
from django.core.files.uploadedfile import InMemoryUploadedFile
from requests.adapters import HTTPAdapter
from urllib3 import Retry

from targets_app.models import TargetStoriesData, TargetsData


# --------------------------------------------------------------------------------------------------------------
# scrap target stories data
def scrap_target_stories_data(api_auth_data, target_instagram_id):
    url = 'https://boxapi.ir/api/instagram/user/get_stories'

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
        "ids": [int(target_instagram_id)]
    }

    response = session.post(url, json=data, auth=api_auth_data, timeout=(10, 30))

    if response.status_code == 200:
        response = response.json()['response']['body']['reels'][f'{target_instagram_id}']['items']
        yield f"<div class='analyze_color_5'>Total number of posts: <span class='analyze_color_4'>{len(response)}</span></div>"
        counter_number = 1
        for story in response:
            yield f"<div class='analyze_color_6'><span class='analyze_color_3'>[<span class='analyze_color_7'> {counter_number} </span>]</span> scrap story: <span class='analyze_color_3'>{story['pk']}</span> data</div>"
            taken_at = str(datetime.datetime.fromtimestamp(story['taken_at']))
            expiring_at = str(datetime.datetime.fromtimestamp(story['expiring_at']))
            if not TargetStoriesData.objects.filter(instagram_pk=story['pk'], target_db_data=TargetsData.objects.get(instagram_id=target_instagram_id)).exists():
                new_target_story_data = TargetStoriesData.objects.create(instagram_pk=story['pk'],
                                                                         instagram_id=story['id'],
                                                                         taken_at=taken_at,
                                                                         expiring_at=expiring_at,
                                                                         like_and_view_counts_disabled=story['like_and_view_counts_disabled'],
                                                                         is_reel_media=story['is_reel_media'],
                                                                         commenting_disabled_for_viewer=story['commenting_disabled_for_viewer'],
                                                                         can_viewer_save=story['can_viewer_save'],
                                                                         code=story['code'],
                                                                         can_reply=story['can_reply'],
                                                                         can_reshare=story['can_reshare'],
                                                                         caption=story['caption'],
                                                                         target_db_data=TargetsData.objects.get(instagram_id=target_instagram_id))

                response = session.get(story['image_versions2']['candidates'][0]['url'], timeout=(10, 30))
                image_data = BytesIO(response.content)
                image_file = InMemoryUploadedFile(image_data, None, 'image.jpg', 'image/jpeg', response.content, None)
                new_target_story_data.cover_image.save(f'{story["pk"]}.jpg', image_file)
                new_target_story_data.save()

                if 'video_versions' in story:
                    yield f"<div class='analyze_color_5'>Downloading story: <span class='analyze_color_4'>{story['pk']}</span> video contents data ...</div>"
                    response = session.get(story['video_versions'][0]['url'], timeout=(10, 30))
                    video_data = BytesIO(response.content)
                    video_file = InMemoryUploadedFile(video_data, None, 'video.mp4', 'video/mp4', response.content, None)
                    new_target_story_data.video_file.save(f'{story["pk"]}.mp4', video_file)
                    new_target_story_data.save()

            counter_number += 1

        yield f"<div class='font_1 analyze_color_2'>{'-' * 70}</div><div class='analyze_color_1'>Target: <span class='analyze_color_6'>{target_instagram_id}</span> stories data was successfully extracted.</div><div class='font_1 analyze_color_2'>{'-' * 70}</div>"
    else:
        yield 'error'
        return 'error'
