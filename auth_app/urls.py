from django.urls import path
from . import views

urlpatterns = [
    path('', views.LoginPage.as_view(), name='login_page'),
    path('login_users/', views.LoginPage.as_view()),
    path('logout_users/', views.LogoutUsers.as_view()),
    path('settings_page/', views.SettingsPage.as_view(), name='SettingsPage'),
]