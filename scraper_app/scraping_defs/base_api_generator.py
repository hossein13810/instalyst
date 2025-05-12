from requests.auth import HTTPBasicAuth

from auth_app.models import UserTargetsListData
from scraper_app.scraping_defs.scrap_target_followers_data import scrap_target_followers_data
from scraper_app.scraping_defs.scrap_target_followings_data import scrap_target_followings_data
from scraper_app.scraping_defs.scrap_target_highlights_data import scrap_target_highlights_data
from scraper_app.scraping_defs.scrap_target_instagram_id import scrap_target_instagram_id
from scraper_app.scraping_defs.scrap_target_main_info import scrap_target_main_info
from scraper_app.scraping_defs.scrap_target_posts_data import scrap_target_posts_data
from scraper_app.scraping_defs.scrap_target_stories_data import scrap_target_stories_data
from targets_app.models import TargetsData


def scraper_function(scrap_functions, targets_username_list, user_db_id):
    username = 'hosnemai'
    password = 'zaHMCHXFrmlcJM'
    api_auth_data = HTTPBasicAuth(username, password)

    if 'scrap_target_main_info' in scrap_functions.keys():
        yield ''
        if not TargetsData.objects.filter(username=targets_username_list[0]).exists():
            target_instagram_id = scrap_target_instagram_id(api_auth_data=api_auth_data, target_username=targets_username_list[0])
            if target_instagram_id != 'error':
                new_target_db_data_id = scrap_target_main_info(api_auth_data=api_auth_data, target_instagram_id=target_instagram_id)
                if not UserTargetsListData.objects.filter(user_db_data_id=user_db_id, target_db_data_id=new_target_db_data_id).exists():
                    UserTargetsListData.objects.create(user_db_data_id=user_db_id, target_db_data_id=new_target_db_data_id)
            else:
                yield 'error'
        else:
            new_target_db_data_id = TargetsData.objects.get(username=targets_username_list[0]).id
            if not UserTargetsListData.objects.filter(user_db_data_id=user_db_id, target_db_data_id=new_target_db_data_id).exists():
                UserTargetsListData.objects.create(user_db_data_id=user_db_id, target_db_data_id=new_target_db_data_id)
    if 'followers_check' in scrap_functions.keys():
        for target in targets_username_list:
            yield f"<div class='analyze_color_3'>start scrap target: <span class='analyze_color_6'>{target}</span> followers data.</div><div class='font_1 analyze_color_2'>{'-' * 70}</div>"
            img_download = scrap_functions['followers_check'].split(': ')[1].replace(')', '').strip()
            yield from scrap_target_followers_data(api_auth_data=api_auth_data, target_instagram_id=target, img_download=img_download)
    if 'followings_check' in scrap_functions.keys():
        for target in targets_username_list:
            yield f"<div class='analyze_color_3'>start scrap target: <span class='analyze_color_6'>{target}</span> followings data.</div><div class='font_1 analyze_color_2'>{'-' * 70}</div>"
            img_download = scrap_functions['followings_check'].split(': ')[1].replace(')', '').strip()
            yield from scrap_target_followings_data(api_auth_data=api_auth_data, target_instagram_id=target, img_download=img_download)
    if 'post_and_reels_check' in scrap_functions.keys():
        for target in targets_username_list:
            yield f"<div class='analyze_color_3'>start scrap target: <span class='analyze_color_6'>{target}</span> posts data.</div><div class='font_1 analyze_color_2'>{'-' * 70}</div>"
            post_download = scrap_functions['post_and_reels_check'].split(' __ ')[0].split(': ')[1].replace('(', '').strip()
            post_likes = scrap_functions['post_and_reels_check'].split(' __ ')[1].split(': ')[1].strip()
            post_comments = scrap_functions['post_and_reels_check'].split(' __ ')[2].split(': ')[1].replace(')', '').strip()
            yield from scrap_target_posts_data(api_auth_data=api_auth_data, target_instagram_id=target, post_download=post_download, post_likes=post_likes, post_comments=post_comments)
    if 'stories_check' in scrap_functions.keys():
        for target in targets_username_list:
            yield f"<div class='analyze_color_3'>start scrap target: <span class='analyze_color_6'>{target}</span> stories data.</div><div class='font_1 analyze_color_2'>{'-' * 70}</div>"
            yield from scrap_target_stories_data(api_auth_data=api_auth_data, target_instagram_id=target)
    if 'highlights_check' in scrap_functions.keys():
        for target in targets_username_list:
            yield f"<div class='analyze_color_3'>start scrap target: <span class='analyze_color_6'>{target}</span> highlights data.</div><div class='font_1 analyze_color_2'>{'-' * 70}</div>"
            yield from scrap_target_highlights_data(api_auth_data=api_auth_data, target_instagram_id=target)
