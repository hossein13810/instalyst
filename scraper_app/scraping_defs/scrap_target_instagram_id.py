# --------------------------------------------------------------------------------------------------------------
# scrap target instagram id
import requests


def scrap_target_instagram_id(api_auth_data, target_username):
    url = 'https://boxapi.ir/api/instagram/user/get_web_profile_info'

    data = {
        'username': target_username
    }

    response = requests.post(url, json=data, auth=api_auth_data, timeout=999999)

    if response.status_code == 200:
        return response.json()['response']['body']['data']['user']['id']
    else:
        return 'error'
