from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from . import views

urlpatterns = [
    path('analyst_targets_list_page/', views.AnalystTargetsListPage.as_view(), name='AnalystTargetsListPage'),
    path('analyses_menu_page/id_<int:target_db_id>/', views.AnalysesMenuPage.as_view(), name='AnalysesMenuPage'),
    path('common_followers_and_following_page/id_<int:target_db_id>/', views.CommonFollowersAndFollowingPage.as_view(), name='CommonFollowersAndFollowingPage'),
    path('load_common_fr_fr_list/', csrf_exempt(views.LoadCommonFrFrList.as_view())),
    path('load_common_fg_fg_list/', csrf_exempt(views.LoadCommonFgFgList.as_view())),
    path('load_common_fr_fg_list/', csrf_exempt(views.LoadCommonFrFgList.as_view())),
    path('load_common_fg_fr_list/', csrf_exempt(views.LoadCommonFgFrList.as_view())),
    path('interactions_graph_page/id_<int:target_db_id>/', views.InteractionsGraphPage.as_view(), name='InteractionsGraphPage'),
    path('interactions_graph_page/', csrf_exempt(views.InteractionsGraphPage.as_view())),
    path('duplicate_names_page/id_<int:target_db_id>/', views.DuplicateNamesPage.as_view(), name='DuplicateNamesPage'),
    path('duplicate_names_page/', csrf_exempt(views.DuplicateNamesPage.as_view())),
    path('intractions_timeline_page/id_<int:target_db_id>/mode_<str:chart_mode>/', views.IntractionsTimeLinePage.as_view(), name='IntractionsTimeLinePage'),
    path('intractions_timeline_page/', csrf_exempt(views.IntractionsTimeLinePage.as_view())),
    path('captions_analysis_page/id_<int:target_db_id>/', views.CaptionsAnalysisPage.as_view(), name='CaptionsAnalysisPage'),
    path('captions_analysis_page/', csrf_exempt(views.CaptionsAnalysisPage.as_view())),
]
