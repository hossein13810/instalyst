import datetime
from io import BytesIO

import requests
from django.core.files.uploadedfile import InMemoryUploadedFile
from requests.adapters import HTTPAdapter
from urllib3 import Retry

from targets_app.models import TargetHighlightDetailsData, TargetHighlightsData


# --------------------------------------------------------------------------------------------------------------
# scrap target highlight details data
def scrap_target_highlight_details_data(api_auth_data, highlight_id):
    url = 'https://boxapi.ir/api/instagram/highlight/get_stories'

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
        "ids": [highlight_id]
    }

    response = session.post(url, json=data, auth=api_auth_data, timeout=(10, 30))

    if response.status_code == 200:
        response = response.json()['response']['body']['reels'][f'highlight:{highlight_id}']['items']
        counter_number = 1
        for item in response:
            yield f"<div class='analyze_color_6'><span class='analyze_color_3'>[<span class='analyze_color_7'> {counter_number} </span>]</span> scrap item: <span class='analyze_color_3'>{item['id']}</span> data</div>"
            taken_at = str(datetime.datetime.fromtimestamp(item['taken_at']))
            if not TargetHighlightDetailsData.objects.filter(instagram_pk=item['pk'], highlight_db_data=TargetHighlightsData.objects.get(instagram_id=highlight_id)).exists():
                new_target_highlight_details_db_data = TargetHighlightDetailsData.objects.create(instagram_pk=item['pk'],
                                                                                                 instagram_id=item['id'],
                                                                                                 taken_at=taken_at,
                                                                                                 like_and_view_counts_disabled=item['like_and_view_counts_disabled'],
                                                                                                 is_reel_media=item['is_reel_media'],
                                                                                                 commenting_disabled_for_viewer=item['commenting_disabled_for_viewer'],
                                                                                                 can_viewer_save=item['can_viewer_save'],
                                                                                                 code=item['code'],
                                                                                                 can_reply=item['can_reply'],
                                                                                                 can_reshare=item['can_reshare'],
                                                                                                 caption=item['caption'],
                                                                                                 highlight_db_data=TargetHighlightsData.objects.get(instagram_id=highlight_id))
                response = session.get(item['image_versions2']['candidates'][0]['url'], timeout=(10, 30))
                image_data = BytesIO(response.content)
                image_file = InMemoryUploadedFile(image_data, None, 'image.jpg', 'image/jpeg', response.content, None)
                new_target_highlight_details_db_data.cover_image.save(f'{item["pk"]}.jpg', image_file)
                new_target_highlight_details_db_data.save()

                if 'video_versions' in item:
                    yield f"<div class='analyze_color_5'>Downloading item: <span class='analyze_color_4'>{item['pk']}</span> video contents data ...</div>"
                    response = session.get(item['video_versions'][0]['url'], timeout=(10, 30))
                    video_data = BytesIO(response.content)
                    video_file = InMemoryUploadedFile(video_data, None, 'video.mp4', 'video/mp4', response.content, None)
                    new_target_highlight_details_db_data.video_file.save(f'{item["pk"]}.mp4', video_file)
                    new_target_highlight_details_db_data.save()
            counter_number += 1
    else:
        yield 'error'
        return 'error'
