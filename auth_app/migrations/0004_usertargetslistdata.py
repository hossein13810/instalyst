# Generated by Django 5.1.3 on 2025-05-04 12:21

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth_app', '0003_alter_usersdata_managers_and_more'),
        ('targets_app', '0024_alter_targetfollowersdata_profile_image_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserTargetsListData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('target_db_data', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='targets_app.targetsdata')),
                ('user_db_data', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
