from django.contrib import admin
from django.contrib.auth.models import Group

from auth_app.models import UsersData, UserTargetsListData


class UserDataShowMode(admin.ModelAdmin):
    list_display = ('id', 'user_full_name', 'user_code', 'user_last_login')
    fieldsets = ((None, {"fields": ('user_full_name', 'user_code', 'user_last_login', 'password', 'user_admin_permission')}),)


admin.site.register(UsersData, UserDataShowMode)
admin.site.register(UserTargetsListData)
admin.site.unregister(Group)
