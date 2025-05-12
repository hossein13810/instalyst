from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from . import views

urlpatterns = [
    path('users_list_page/', views.UsersListPage.as_view(), name='UsersListPage'),
    path('add_new_user_page/', views.AddNewUserPage.as_view(), name='AddNewUserPage'),
    path('load_user_targets/', csrf_exempt(views.LoadUserTargets.as_view()), name='LoadUserTargets'),
]