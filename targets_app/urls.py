from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from . import views

urlpatterns = [
    path('targets_list_page/', views.TargetsListPage.as_view(), name='targets_list_page'),
    path('load_targets_data/', views.LoadTargetsData.as_view()),
    path('show_target_details_page/id_<int:target_db_id>/', views.ShowTargetDetailsPage.as_view()),
    path('load_target_posts_data/', csrf_exempt(views.LoadTargetPostsData.as_view())),
    path('load_target_stories_data/', csrf_exempt(views.LoadTargetStoriesData.as_view())),
    path('load_target_followers_data/', csrf_exempt(views.LoadTargetFollowersData.as_view())),
    path('load_target_followings_data/', csrf_exempt(views.LoadTargetFollowingsData.as_view())),
    path('load_highlight_stories_data/', csrf_exempt(views.LoadHighlightStoriesData.as_view())),
    path('show_post_details_page/id_<int:post_id>/', views.ShowPostDetailsPage.as_view()),
    path('load_post_likes_data/', csrf_exempt(views.LoadPostLikesData.as_view())),
    path('load_post_comments_data/', csrf_exempt(views.LoadPostCommentsData.as_view())),
    path('show_story_details_page/id_<int:story_id>/', views.ShowStoryDetailsPage.as_view()),
    path('show_highlight_story_details_page/id_<int:story_id>/', views.ShowHighlightStoryDetailsPage.as_view()),
    path('show_user_details_page/id_<int:instagram_id>/', views.ShowUserDetailsPage.as_view()),
]