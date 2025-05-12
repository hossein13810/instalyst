from io import BytesIO

import requests
from django.core.files.uploadedfile import InMemoryUploadedFile
from requests.adapters import HTTPAdapter
from urllib3 import Retry

from scraper_app.scraping_defs.scrap_target_highlight_details_data import scrap_target_highlight_details_data
from targets_app.models import TargetHighlightsData, TargetsData


# --------------------------------------------------------------------------------------------------------------
# scrap target highlights data
def scrap_target_highlights_data(api_auth_data, target_instagram_id):
    url = 'https://boxapi.ir/api/instagram/user/get_highlights'

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
        "id": target_instagram_id
    }

    response = session.post(url, json=data, auth=api_auth_data, timeout=(10, 30))

    if response.status_code == 200:
        response = response.json()['response']['body']['data']['user']['edge_highlight_reels']['edges']
        yield f"<div class='analyze_color_5'>Total number of posts: <span class='analyze_color_4'>{len(response)}</span></div>"
        counter_number = 1
        for highlight in response:
            highlight = highlight['node']
            if not TargetHighlightsData.objects.filter(instagram_id=highlight['id'], target_db_data=TargetsData.objects.get(instagram_id=target_instagram_id)).exists():
                new_target_highlight_db_data = TargetHighlightsData.objects.create(instagram_id=highlight['id'],
                                                                                   title=highlight['title'],
                                                                                   target_db_data=TargetsData.objects.get(instagram_id=target_instagram_id))

                response = session.get(highlight['cover_media']['thumbnail_src'], timeout=(10, 30))
                image_data = BytesIO(response.content)
                image_file = InMemoryUploadedFile(image_data, None, 'image.jpg', 'image/jpeg', response.content, None)
                new_target_highlight_db_data.cover_image.save(f'{highlight["id"]}.jpg', image_file)
                new_target_highlight_db_data.save()

                yield f"<div class='font_1 analyze_color_2'>{'-' * 70}</div><div class='analyze_color_3'>start scrap highlight: <span class='analyze_color_6'>{highlight['title']}</span> items data.</div>"
                yield from scrap_target_highlight_details_data(api_auth_data=api_auth_data, highlight_id=highlight['id'])

            counter_number += 1
        yield f"<div class='font_1 analyze_color_2'>{'-' * 70}</div><div class='analyze_color_1'>Target: <span class='analyze_color_6'>{target_instagram_id}</span> highlights data was successfully extracted.</div><div class='font_1 analyze_color_2'>{'-' * 70}</div>"
    else:
        yield 'error'
        return 'error'
