import datetime

from django.contrib.auth import login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.views import View
from django.contrib import messages

from auth_app.models import UsersData


class LoginPage(View):
    def get(self, request):
        if 'user_data' in self.request.session and self.request.session['user_data']['log_313_in']:
            return redirect('targets_list_page')
        else:
            return render(request, 'auth_app/login_page.html')

    def post(self, request):
        user_code_input = self.request.POST.get('user_code_input')
        password_input = self.request.POST.get('password_input')
        if UsersData.objects.filter(user_code=user_code_input, password=password_input).exists():
            user_data_data_base = UsersData.objects.get(user_code=user_code_input)
            login(self.request, user_data_data_base)
            self.request.session['user_data'] = {
                'user_db_id': user_data_data_base.id,
                'user_full_name': user_data_data_base.user_full_name,
                'user_code': user_data_data_base.user_code,
                'user_last_login': str(user_data_data_base.user_last_login).split('.')[0].replace('-', '/').replace(' ', '-'),
                'user_admin_permission': user_data_data_base.user_admin_permission,
                'log_313_in': True,
            }
            user_data_data_base.user_last_login = datetime.datetime.now()
            user_data_data_base.save()
            return redirect('targets_list_page')
        else:
            messages.error(request, 'The information entered is not correct')
            return redirect('login_page')


class LogoutUsers(View):
    def get(self, request):
        self.request.session['user_data'] = None
        self.request.session.modified = True
        logout(self.request)
        return HttpResponse('done')


class SettingsPage(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request):
        return render(request, 'auth_app/settings_page.html', {'page_name': 'settings_page', 'user_data': self.request.session['user_data']})

    def post(self, request):
        user_db_id = self.request.session['user_data']['user_db_id']
        user_full_name_input = self.request.POST.get('user_full_name_input')
        user_code_input = self.request.POST.get('user_code_input')
        user_password_input_1 = self.request.POST.get('user_password_input_1')

        user_data = UsersData.objects.get(id=user_db_id)
        user_data.user_full_name = user_full_name_input
        user_data.user_code = user_code_input
        if user_password_input_1 != '':
            user_data.password = user_password_input_1
        user_data.save()

        self.request.session['user_data'] = {
            'user_db_id': user_data.id,
            'user_full_name': user_data.user_full_name,
            'user_code': user_data.user_code,
            'user_last_login': str(user_data.user_last_login).split('.')[0].replace('-', '/').replace(' ', '-'),
            'user_admin_permission': user_data.user_admin_permission,
            'log_313_in': True,
        }
        self.request.session.modified = True

        messages.success(request, 'Your data edited successfuly')
        return redirect('SettingsPage')
