# --------------------------------------------------------------------------------------------------------------
# scrap target account main info
from io import BytesIO

import requests
from django.core.files.uploadedfile import InMemoryUploadedFile

from targets_app.models import TargetsData, TargetBioLinks, TargetAccountHashtags


def scrap_target_main_info(api_auth_data, target_instagram_id):
    url = 'https://boxapi.ir/api/instagram/user/get_info_by_id'

    data = {
        'id': target_instagram_id
    }

    response = requests.post(url, json=data, auth=api_auth_data, timeout=(10, 30))

    if response.status_code == 200:
        response = response.json()['response']['body']['user']

        if 'profile_pic_id' in response.keys():
            profile_pic_id = response['profile_pic_id']
        else:
            profile_pic_id = None

        if not TargetsData.objects.filter(instagram_id=target_instagram_id).exists():
            new_target_db_data = TargetsData.objects.create(instagram_id=target_instagram_id,
                                                            username=response['username'],
                                                            full_name=response['full_name'],
                                                            biography=response['biography'],
                                                            is_verified=response['is_verified'],
                                                            is_private=response['is_private'],
                                                            is_new_to_instagram=response['is_new_to_instagram'],
                                                            is_profile_picture_expansion_enabled=response['is_profile_picture_expansion_enabled'],
                                                            has_highlight_reels=response['has_highlight_reels'],
                                                            has_music_on_profile=response['has_music_on_profile'],
                                                            fan_club_info=response['fan_club_info'],
                                                            follower_count=response['follower_count'],
                                                            following_count=response['following_count'],
                                                            media_count=response['media_count'],
                                                            is_business=response['is_business'],
                                                            category=response['category'],
                                                            hd_profile_pic_url=response['hd_profile_pic_url_info']['url'],
                                                            profile_pic_id=profile_pic_id)

            for item in response['bio_links']:
                TargetBioLinks.objects.create(bio_title=item['title'], bio_url=item['url'], target_db_data=new_target_db_data)

            for hashtag in response['biography_with_entities']['entities']:
                if 'hashtag' in hashtag.keys():
                    if hashtag['hashtag'] is not None:
                        TargetAccountHashtags.objects.create(hashtag_name=hashtag['hashtag']['name'], hashtag_id=hashtag['hashtag']['id'], target_db_data=new_target_db_data)

            response = requests.get(response['hd_profile_pic_url_info']['url'], timeout=(10, 30))
            image_data = BytesIO(response.content)
            image_file = InMemoryUploadedFile(image_data, None, 'image.jpg', 'image/jpeg', response.content, None)
            new_target_db_data.profile_image.save(f'{target_instagram_id}.jpg', image_file)
            new_target_db_data.save()

            return new_target_db_data.id
