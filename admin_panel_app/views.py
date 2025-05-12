from django.contrib import messages
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.views import View

from auth_app.models import UsersData, UserTargetsListData


class UsersListPage(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request):
        if self.request.session['user_data']['user_admin_permission'] == 'on':
            all_users_list = UsersData.objects.all().exclude(is_staff=True)
            return render(request, 'admin_panel_app/users_list_page.html', {'page_name': 'users_list_page', 'all_users_list': all_users_list, 'user_data': self.request.session['user_data']})
        else:
            return redirect('login_page')


class AddNewUserPage(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request):
        if self.request.session['user_data']['user_admin_permission'] == 'on':
            return render(request, 'admin_panel_app/add_new_users_page.html', {'page_name': 'users_list_page', 'user_data': self.request.session['user_data']})
        else:
            return redirect('login_page')

    def post(self, request):
        user_full_name_input = self.request.POST.get('user_full_name_input')
        user_code_input = self.request.POST.get('user_code_input')
        user_password_input = self.request.POST.get('user_password_input')
        user_admin_permission_input = self.request.POST.get('user_admin_permission_input')

        if UsersData.objects.filter(user_code=user_code_input).exists():
            messages.error(request, 'The information entered is not correct')
            return redirect('AddNewUserPage')
        else:
            UsersData.objects.create(user_full_name=user_full_name_input, user_code=user_code_input, password=user_password_input, user_admin_permission=user_admin_permission_input)
            messages.success(request, 'The new user save successfuly')
            return redirect('UsersListPage')


class LoadUserTargets(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def post(self, request):
        user_db_id = self.request.POST.get('user_db_id')
        user_targets_list_data = UserTargetsListData.objects.filter(user_db_data_id=user_db_id).values('target_db_data__instagram_id', 'target_db_data__username', 'target_db_data__full_name', 'target_db_data__profile_image')
        return JsonResponse(list(user_targets_list_data), safe=False)
