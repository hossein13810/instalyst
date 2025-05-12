import datetime
from collections import defaultdict

from targets_app.models import TargetsData, TargetFollowersData, TargetFollowingsData, TargetPostsData, TargetPostLikesData, TargetPostCommentsData


def generate_all_interactives_data_dict(target_all_db_data):
    all_ids = set(
        target_all_db_data['followers_id_list']
        | target_all_db_data['followings_id_list']
        | set(target_all_db_data['likes_id_list'])
        | set(target_all_db_data['comments_id_list'])
    )
    return {str(uid): 0 for uid in all_ids}


# ---------------------------------------------------------------------------------------------------------------------------
# generate_target_all_db_data def
def generate_target_all_db_data(target_db_id):
    target = TargetsData.objects.get(id=target_db_id)

    followers_id_list = list(TargetFollowersData.objects.filter(target_db_data_id=target_db_id).values_list('instagram_id', flat=True))

    followings_id_list = list(TargetFollowingsData.objects.filter(target_db_data_id=target_db_id).values_list('instagram_id', flat=True))

    posts = list(TargetPostsData.objects.filter(target_db_data_id=target_db_id).only('id', 'taken_at'))

    posts_id_list = [post.id for post in posts]
    posts_taken_at_dict = {post.id: post.taken_at for post in posts}

    likes = list(TargetPostLikesData.objects.filter(post_db_data_id__in=posts_id_list).values('instagram_id', 'post_db_data_id'))

    comments = list(TargetPostCommentsData.objects.filter(post_db_data_id__in=posts_id_list).values('instagram_id', 'post_db_data_id', 'created_at'))

    likes_id_list = [like['instagram_id'] for like in likes]
    comments_id_list = [comment['instagram_id'] for comment in comments]

    return {
        'followers_id_list': set(followers_id_list),
        'followings_id_list': set(followings_id_list),
        'likes': likes,
        'comments': comments,
        'likes_id_list': likes_id_list,
        'comments_id_list': comments_id_list,
        'posts_id_list': posts_id_list,
        'posts_taken_at_dict': posts_taken_at_dict,
        'media_count': target.media_count or 1
    }


# ---------------------------------------------------------------------------------------------------------------------------
# generate_interactives_engagement_percentage_data def
def generate_interactives_engagement_percentage_data(all_interactives_data_dict, target_all_db_data):
    followers = target_all_db_data['followers_id_list']
    followings = target_all_db_data['followings_id_list']
    likes = target_all_db_data['likes']
    comments = target_all_db_data['comments']
    media_count = target_all_db_data['media_count']
    posts_taken_at = target_all_db_data['posts_taken_at_dict']

    likes_by_user = defaultdict(list)
    for like in likes:
        likes_by_user[like['instagram_id']].append(like['post_db_data_id'])

    comments_by_user = defaultdict(list)
    for comment in comments:
        comments_by_user[comment['instagram_id']].append(comment)

    for interactive in all_interactives_data_dict:
        uid = interactive

        if uid in followers:
            all_interactives_data_dict[uid] += 15

        if uid in followings:
            all_interactives_data_dict[uid] += 25

        user_likes = likes_by_user.get(uid, [])
        all_interactives_data_dict[uid] += round((len(user_likes) / int(media_count)) * 15, 2)

        user_comments = comments_by_user.get(uid, [])
        all_interactives_data_dict[uid] += round((len(user_comments) / int(media_count)) * 20, 2)

        time_score_sum = 0
        for comment in user_comments:
            post_time = posts_taken_at.get(comment['post_db_data_id'])
            comment_time = comment['created_at']
            if post_time and comment_time:
                delta_min = (comment_time - post_time).total_seconds() / 60
                if 0 <= delta_min <= 1440:
                    time_score = (-(24 / 1440) * delta_min) + 25
                else:
                    time_score = 1
                time_score_sum += time_score

        if user_comments:
            avg_time_score = round(time_score_sum / len(user_comments), 2)
            all_interactives_data_dict[uid] += avg_time_score

    return all_interactives_data_dict
