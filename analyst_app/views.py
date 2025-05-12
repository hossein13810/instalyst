from collections import Counter

import jdatetime
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.paginator import Paginator
from django.http import JsonResponse
from django.shortcuts import render
from django.views import View

from analyst_app.functions.duplicate_names_finder import find_common_substrings
from analyst_app.functions.find_shamsi_day_name import find_shamsi_day_name
from analyst_app.functions.find_time_range import find_time_range
from analyst_app.functions.intractions_graph_defs import generate_target_all_db_data, generate_all_interactives_data_dict, generate_interactives_engagement_percentage_data
from targets_app.models import TargetFollowersData, TargetFollowingsData, TargetsData, TargetPostsData, TargetStoriesData


class AnalystTargetsListPage(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request):
        return render(request, 'analyst_app/targets_list_page.html', {'page_name': 'analyses_page', 'user_data': self.request.session['user_data']})


class AnalysesMenuPage(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request, target_db_id):
        return render(request, 'analyst_app/analyses_menu_page.html', {'page_name': 'analyses_page', 'target_db_id': target_db_id, 'user_data': self.request.session['user_data']})


class CommonFollowersAndFollowingPage(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request, target_db_id):
        follower_ids = TargetFollowersData.objects.filter(target_db_data_id=target_db_id).values_list('instagram_id', flat=True)
        following_ids = TargetFollowingsData.objects.filter(target_db_data_id=target_db_id).values_list('instagram_id', flat=True)

        common_fr_fr_list = TargetFollowersData.objects.filter(instagram_id__in=follower_ids).exclude(target_db_data_id=target_db_id).values_list('target_db_data', flat=True).distinct()
        common_fr_fr_list = TargetsData.objects.filter(id__in=common_fr_fr_list)

        common_fg_fg_list = TargetFollowingsData.objects.filter(instagram_id__in=following_ids).exclude(target_db_data_id=target_db_id).values_list('target_db_data', flat=True).distinct()
        common_fg_fg_list = TargetsData.objects.filter(id__in=common_fg_fg_list)

        common_fr_fg_list = TargetFollowingsData.objects.filter(instagram_id__in=follower_ids).exclude(target_db_data_id=target_db_id).exclude(target_db_data__in=common_fr_fr_list).exclude(target_db_data__in=common_fg_fg_list).values_list('target_db_data', flat=True).distinct()
        common_fr_fg_list = TargetsData.objects.filter(id__in=common_fr_fg_list)

        common_fg_fr_list = TargetFollowersData.objects.filter(instagram_id__in=following_ids).exclude(target_db_data_id=target_db_id).exclude(target_db_data__in=common_fr_fr_list).exclude(target_db_data__in=common_fg_fg_list).values_list('target_db_data', flat=True).distinct()
        common_fg_fr_list = TargetsData.objects.filter(id__in=common_fg_fr_list)

        return render(request, 'analyst_app/common_followers_and_following.html', {'page_name': 'analyses_page', 'target_db_id': target_db_id, 'common_fr_fr_list': common_fr_fr_list, 'common_fg_fg_list': common_fg_fg_list, 'common_fr_fg_list': common_fr_fg_list, 'common_fg_fr_list': common_fg_fr_list, 'user_data': self.request.session['user_data']})


class LoadCommonFrFrList(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def post(self, request):
        target_db_id = self.request.POST.get('target_db_id')
        user_db_id = self.request.POST.get('user_db_id')

        target_followers_list = TargetFollowersData.objects.filter(target_db_data_id=target_db_id)
        common_fr_fr_list = []
        for user in target_followers_list:
            all_common_fr_fr = TargetFollowersData.objects.filter(instagram_id=user.instagram_id, target_db_data_id=user_db_id).exclude(target_db_data_id=target_db_id)
            for common_fr_fr in all_common_fr_fr:
                if common_fr_fr.target_db_data not in common_fr_fr_list:
                    common_fr_fr_list.append({
                        'id': common_fr_fr.id,
                        'instagram_id': common_fr_fr.instagram_id,
                        'username': common_fr_fr.username,
                        'profile_image': str(common_fr_fr.profile_image),
                    })

        return JsonResponse(list(common_fr_fr_list), safe=False)


class LoadCommonFgFgList(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def post(self, request):
        target_db_id = self.request.POST.get('target_db_id')
        user_db_id = self.request.POST.get('user_db_id')

        target_followings_list = TargetFollowingsData.objects.filter(target_db_data_id=target_db_id)
        common_fg_fg_list = []
        for user in target_followings_list:
            all_common_fg_fg = TargetFollowingsData.objects.filter(instagram_id=user.instagram_id, target_db_data_id=user_db_id).exclude(target_db_data_id=target_db_id)
            for common_fg_fg in all_common_fg_fg:
                if common_fg_fg.target_db_data not in common_fg_fg_list:
                    common_fg_fg_list.append({
                        'id': common_fg_fg.id,
                        'instagram_id': common_fg_fg.instagram_id,
                        'username': common_fg_fg.username,
                        'profile_image': str(common_fg_fg.profile_image),
                    })

        return JsonResponse(list(common_fg_fg_list), safe=False)


class LoadCommonFrFgList(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def post(self, request):
        target_db_id = self.request.POST.get('target_db_id')
        user_db_id = self.request.POST.get('user_db_id')

        target_followers_list = TargetFollowersData.objects.filter(target_db_data_id=target_db_id)
        target_followings_list = TargetFollowingsData.objects.filter(target_db_data_id=target_db_id)

        common_fr_fr_list = []
        for user in target_followers_list:
            all_common_fr_fr = TargetFollowersData.objects.filter(instagram_id=user.instagram_id).exclude(target_db_data_id=target_db_id)
            for common_fr_fr in all_common_fr_fr:
                if common_fr_fr.target_db_data not in common_fr_fr_list:
                    common_fr_fr_list.append(common_fr_fr.target_db_data)

        common_fg_fg_list = []
        for user in target_followings_list:
            all_common_fg_fg = TargetFollowingsData.objects.filter(instagram_id=user.instagram_id).exclude(target_db_data_id=target_db_id)
            for common_fg_fg in all_common_fg_fg:
                if common_fg_fg.target_db_data not in common_fg_fg_list:
                    common_fg_fg_list.append(common_fg_fg.target_db_data)

        common_fr_fg_list = []
        for user in target_followers_list:
            all_common_fr_fg = TargetFollowingsData.objects.filter(instagram_id=user.instagram_id, target_db_data_id=user_db_id).exclude(target_db_data_id=target_db_id)
            for common_fr_fg in all_common_fr_fg:
                if common_fr_fg.target_db_data not in common_fr_fr_list and common_fr_fg.target_db_data not in common_fg_fg_list:
                    if common_fr_fg.target_db_data not in common_fr_fg_list:
                        common_fr_fg_list.append({
                            'id': common_fr_fg.id,
                            'instagram_id': common_fr_fg.instagram_id,
                            'username': common_fr_fg.username,
                            'profile_image': str(common_fr_fg.profile_image),
                        })

        return JsonResponse(list(common_fr_fg_list), safe=False)


class LoadCommonFgFrList(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def post(self, request):
        target_db_id = self.request.POST.get('target_db_id')
        user_db_id = self.request.POST.get('user_db_id')

        target_followers_list = TargetFollowersData.objects.filter(target_db_data_id=target_db_id)
        target_followings_list = TargetFollowingsData.objects.filter(target_db_data_id=target_db_id)

        common_fr_fr_list = []
        for user in target_followers_list:
            all_common_fr_fr = TargetFollowersData.objects.filter(instagram_id=user.instagram_id).exclude(target_db_data_id=target_db_id)
            for common_fr_fr in all_common_fr_fr:
                if common_fr_fr.target_db_data not in common_fr_fr_list:
                    common_fr_fr_list.append(common_fr_fr.target_db_data)

        common_fg_fg_list = []
        for user in target_followings_list:
            all_common_fg_fg = TargetFollowingsData.objects.filter(instagram_id=user.instagram_id).exclude(target_db_data_id=target_db_id)
            for common_fg_fg in all_common_fg_fg:
                if common_fg_fg.target_db_data not in common_fg_fg_list:
                    common_fg_fg_list.append(common_fg_fg.target_db_data)

        common_fg_fr_list = []
        for user in target_followings_list:
            all_common_fg_fr = TargetFollowersData.objects.filter(instagram_id=user.instagram_id, target_db_data_id=user_db_id).exclude(target_db_data_id=target_db_id)
            for common_fg_fr in all_common_fg_fr:
                if common_fg_fr.target_db_data not in common_fr_fr_list and common_fg_fr.target_db_data not in common_fg_fg_list:
                    if common_fg_fr.target_db_data not in common_fg_fr_list:
                        common_fg_fr_list.append({
                            'id': common_fg_fr.id,
                            'instagram_id': common_fg_fr.instagram_id,
                            'username': common_fg_fr.username,
                            'profile_image': str(common_fg_fr.profile_image),
                        })

        return JsonResponse(list(common_fg_fr_list), safe=False)


class InteractionsGraphPage(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request, target_db_id):
        return render(request, 'analyst_app/interactions_graph_page.html', {'page_name': 'analyses_page', 'target_db_id': target_db_id, 'user_data': self.request.session['user_data']})

    def post(self, request):
        target_db_id = self.request.POST.get('target_db_id')
        instagram_targets_id = TargetsData.objects.get(id=target_db_id).instagram_id
        target_all_db_data = generate_target_all_db_data(target_db_id=target_db_id)
        all_interactives_data_dict: dict = generate_all_interactives_data_dict(target_all_db_data=target_all_db_data)
        interactives_engagement_percentage_data = generate_interactives_engagement_percentage_data(all_interactives_data_dict=all_interactives_data_dict, target_all_db_data=target_all_db_data)
        return JsonResponse({
            'interactives_engagement_percentage_data': interactives_engagement_percentage_data,
            'instagram_targets_id': instagram_targets_id,
        })


class DuplicateNamesPage(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request, target_db_id):
        return render(request, 'analyst_app/duplicate_names_page.html', {'page_name': 'analyses_page', 'target_db_id': target_db_id, 'user_data': self.request.session['user_data']})

    def post(self, request):
        target_db_id = self.request.POST.get('target_db_id')
        char_len = int(self.request.POST.get('char_len'))
        target_followers_list = TargetFollowersData.objects.filter(target_db_data_id=target_db_id)
        target_followings_list = TargetFollowingsData.objects.filter(target_db_data_id=target_db_id)

        users_dict = {}
        for user in target_followers_list:
            users_dict[user.instagram_id] = (str(user.username) + str(user.full_name)).replace('.', '').replace('_', '').replace(' ', '')
        for user in target_followings_list:
            users_dict[user.instagram_id] = (str(user.username) + str(user.full_name)).replace('.', '').replace('_', '').replace(' ', '')

        result_dict = find_common_substrings(list(users_dict.values()), char_len)

        return JsonResponse({
            'result_dict': result_dict,
        })


class IntractionsTimeLinePage(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request, target_db_id, chart_mode):
        return render(request, 'analyst_app/interactions_timeline_page.html', {'page_name': 'analyses_page', 'chart_mode': chart_mode, 'target_db_id': target_db_id, 'user_data': self.request.session['user_data']})

    def post(self, request):
        target_db_id = self.request.POST.get('target_db_id')
        chart_mode = self.request.POST.get('chart_mode')

        target_posts_data = TargetPostsData.objects.filter(target_db_data_id=target_db_id)
        target_stories_data = TargetStoriesData.objects.filter(target_db_data_id=target_db_id)

        if chart_mode == 'time':
            all_data_dict = {
                '06-08': 0,
                '08-10': 0,
                '10-12': 0,
                '12-14': 0,
                '14-16': 0,
                '16-18': 0,
                '18-20': 0,
                '20-22': 0,
                '22-00': 0,
                '00-02': 0,
                '02-04': 0,
                '04-06': 0,
            }
            post_data_dict = {
                '06-08': 0,
                '08-10': 0,
                '10-12': 0,
                '12-14': 0,
                '14-16': 0,
                '16-18': 0,
                '18-20': 0,
                '20-22': 0,
                '22-00': 0,
                '00-02': 0,
                '02-04': 0,
                '04-06': 0,
            }
            story_data_dict = {
                '06-08': 0,
                '08-10': 0,
                '10-12': 0,
                '12-14': 0,
                '14-16': 0,
                '16-18': 0,
                '18-20': 0,
                '20-22': 0,
                '22-00': 0,
                '00-02': 0,
                '02-04': 0,
                '04-06': 0,
            }

            for post in target_posts_data:
                time_float = post.taken_at.time().hour + post.taken_at.time().minute / 60
                matched_range = find_time_range(post_data_dict, time_float)
                all_data_dict[matched_range] += 1
                post_data_dict[matched_range] += 1

            for story in target_stories_data:
                time_float = story.taken_at.time().hour + story.taken_at.time().minute / 60
                matched_range = find_time_range(story_data_dict, time_float)
                all_data_dict[matched_range] += 1
                story_data_dict[matched_range] += 1
        else:
            all_data_dict = {
                'شنبه': 0,
                'یکشنبه': 0,
                'دوشنبه': 0,
                'سه‌ شنبه': 0,
                'چهارشنبه': 0,
                'پنجشنبه': 0,
                'جمعه': 0,
            }
            post_data_dict = {
                'شنبه': 0,
                'یکشنبه': 0,
                'دوشنبه': 0,
                'سه‌ شنبه': 0,
                'چهارشنبه': 0,
                'پنجشنبه': 0,
                'جمعه': 0,
            }
            story_data_dict = {
                'شنبه': 0,
                'یکشنبه': 0,
                'دوشنبه': 0,
                'سه‌ شنبه': 0,
                'چهارشنبه': 0,
                'پنجشنبه': 0,
                'جمعه': 0,
            }

            for post in target_posts_data:
                shamsi_date = find_shamsi_day_name(date=post.taken_at.date())
                all_data_dict[shamsi_date] += 1
                post_data_dict[shamsi_date] += 1

            for story in target_stories_data:
                shamsi_date = find_shamsi_day_name(date=story.taken_at.date())
                all_data_dict[shamsi_date] += 1
                story_data_dict[shamsi_date] += 1

        return JsonResponse({
            'all_data_dict': all_data_dict,
            'post_data_dict': post_data_dict,
            'story_data_dict': story_data_dict,
        })


class CaptionsAnalysisPage(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request, target_db_id):
        return render(request, 'analyst_app/captions_analysis_page.html', {'page_name': 'analyses_page', 'target_db_id': target_db_id, 'user_data': self.request.session['user_data']})

    def post(self, request):
        target_db_id = self.request.POST.get('target_db_id')
        char_len = int(self.request.POST.get('char_len'))

        target_posts_captions_data = TargetPostsData.objects.filter(target_db_data_id=target_db_id)
        captions_words_list = []
        for post in target_posts_captions_data:
            if post.caption is not None:
                words_list = post.caption.split(' ')
                for word in words_list:
                    if len(word) >= char_len:
                        captions_words_list.append(word)

        captions_words_dict = dict(Counter(captions_words_list).most_common())
        return JsonResponse(captions_words_dict)
