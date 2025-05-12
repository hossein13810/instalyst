from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.db import models

from targets_app.models import TargetsData


class UsersDataManager(BaseUserManager):
    def create_user(self, user_full_name, user_code, user_last_login, user_admin_permission, password=None):
        if not user_code:
            raise ValueError('Enter User Code')
        else:
            user = self.model(user_full_name=user_full_name, user_code=user_code, user_last_login=user_last_login, user_admin_permission=user_admin_permission)
            user.set_password(password)
            user.save()
            return user

    def create_superuser(self, user_code, password):
        user = self.create_user(user_full_name='site_admin_313', user_code=user_code, user_last_login='None', password=password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user


class UsersData(AbstractBaseUser):
    user_full_name = models.CharField(max_length=200, blank=True, null=True)
    user_code = models.CharField(max_length=200, blank=True, null=True, unique=True)
    user_last_login = models.DateTimeField(max_length=200, blank=True, null=True)
    user_admin_permission = models.CharField(max_length=200, blank=True, null=True)
    is_staff = models.BooleanField(default=False, blank=True, null=True)

    objects = UsersDataManager()

    USERNAME_FIELD = 'user_code'

    @staticmethod
    def has_perm(perm, obj=None):
        return True

    @staticmethod
    def has_module_perms(app_label):
        return True


class UserTargetsListData(models.Model):
    user_db_data = models.ForeignKey(UsersData, on_delete=models.CASCADE, blank=True, null=True)
    target_db_data = models.ForeignKey(TargetsData, on_delete=models.CASCADE, blank=True, null=True)
