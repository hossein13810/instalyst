from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.paginator import Paginator
from django.db.models import Q
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, redirect
from django.views import View

from auth_app.models import UserTargetsListData
from targets_app.models import TargetsData, TargetHighlightsData, TargetPostsData, TargetStoriesData, TargetFollowersData, TargetFollowingsData, TargetHighlightDetailsData, TargetPostsContentsData, TargetPostLikesData, TargetPostCommentsData


class TargetsListPage(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request):
        target_user_name = self.request.GET.get('target_user_name')
        return render(request, 'targets_app/targets_list_page.html', {'page_name': 'targets_list_page', 'target_user_name': target_user_name, 'user_data': self.request.session['user_data']})


class LoadTargetsData(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request):
        user_all_targets_data = UserTargetsListData.objects.filter(user_db_data_id=self.request.session['user_data']['user_db_id'])
        target_ids = user_all_targets_data.values_list('target_db_data_id', flat=True)
        all_targets_data = TargetsData.objects.filter(id__in=target_ids)

        targets_list = []
        for target in all_targets_data:
            targets_list.append({
                'profile_image': target.profile_image.url if target.profile_image else None,
                'username': target.username,
                'db_id': target.id,
            })

        return JsonResponse(targets_list, safe=False)


class ShowTargetDetailsPage(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request, target_db_id):
        user_all_targets_data = UserTargetsListData.objects.filter(user_db_data_id=self.request.session['user_data']['user_db_id'])
        target_ids = user_all_targets_data.values_list('target_db_data_id', flat=True)

        if target_db_id in target_ids:
            target_details_data = TargetsData.objects.get(id=target_db_id)
            target_highlights_data = TargetHighlightsData.objects.filter(target_db_data=target_details_data).values()
            target_stories_len = len(TargetStoriesData.objects.filter(target_db_data=target_details_data))

            return render(request, 'targets_app/target_details_page.html', {'page_name': 'targets_list_page', 'target_details_data': target_details_data, 'target_highlights_data': target_highlights_data, 'target_stories_len': target_stories_len, 'user_data': self.request.session['user_data']})
        else:
            return redirect('login_page')


class LoadTargetPostsData(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def post(self, request):
        target_db_id = self.request.POST.get('target_db_id')
        paginator = Paginator(TargetPostsData.objects.filter(target_db_data=TargetsData.objects.get(id=target_db_id)).order_by('-taken_at'), 10)
        total_posts_page = int(paginator.num_pages)
        page_number = int(self.request.POST.get('page', 1))
        if page_number <= total_posts_page:
            target_posts_data = paginator.get_page(page_number).object_list.values()
            return JsonResponse(list(target_posts_data), safe=False)
        else:
            return HttpResponse('None')


class LoadTargetStoriesData(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def post(self, request):
        target_db_id = self.request.POST.get('target_db_id')
        paginator = Paginator(TargetStoriesData.objects.filter(target_db_data=TargetsData.objects.get(id=target_db_id)).order_by('-taken_at'), 9)
        total_stories_page = int(paginator.num_pages)
        page_number = int(self.request.POST.get('page', 1))
        if page_number <= total_stories_page:
            target_stories_data = paginator.get_page(page_number).object_list.values()
            return JsonResponse(list(target_stories_data), safe=False)
        else:
            return HttpResponse('None')


class LoadTargetFollowersData(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def post(self, request):
        target_db_id = self.request.POST.get('target_db_id')
        search_value = self.request.POST.get('search_value')

        queryset = TargetFollowersData.objects.filter(target_db_data_id=target_db_id)
        if search_value != '':
            queryset = queryset.filter(Q(username__icontains=search_value) | Q(full_name__icontains=search_value))

        paginator = Paginator(queryset, 20)
        total_followers_page = int(paginator.num_pages)
        page_number = int(self.request.POST.get('page', 1))
        if page_number <= total_followers_page:
            target_followers_data = paginator.get_page(page_number).object_list.values()
            return JsonResponse(list(target_followers_data), safe=False)

        else:
            return HttpResponse('None')


class LoadTargetFollowingsData(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def post(self, request):
        target_db_id = self.request.POST.get('target_db_id')
        search_value = self.request.POST.get('search_value')

        queryset = TargetFollowingsData.objects.filter(target_db_data_id=target_db_id)
        if search_value != '':
            queryset = queryset.filter(Q(username__icontains=search_value) | Q(full_name__icontains=search_value))

        paginator = Paginator(queryset, 20)
        total_followings_page = int(paginator.num_pages)
        page_number = int(self.request.POST.get('page', 1))
        if page_number <= total_followings_page:
            target_followings_data = paginator.get_page(page_number).object_list.values()
            return JsonResponse(list(target_followings_data), safe=False)

        else:
            return HttpResponse('None')


class LoadHighlightStoriesData(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def post(self, request):
        highlight_db_id = self.request.POST.get('highlight_db_id')
        paginator = Paginator(TargetHighlightDetailsData.objects.filter(highlight_db_data=TargetHighlightsData.objects.get(id=highlight_db_id)).order_by('-taken_at'), 9)
        total_stories_page = int(paginator.num_pages)
        page_number = int(self.request.POST.get('page', 1))
        if page_number <= total_stories_page:
            highlight_stories_data = paginator.get_page(page_number).object_list.values()
            return JsonResponse(list(highlight_stories_data), safe=False)
        else:
            return HttpResponse('None')


class ShowPostDetailsPage(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request, post_id):
        post_details_data = TargetPostsData.objects.get(id=post_id)
        post_contents_data = TargetPostsContentsData.objects.filter(post_db_data=post_details_data)
        return render(request, 'targets_app/post_details_page.html', {'page_name': 'targets_list_page', 'post_details_data': post_details_data, 'post_contents_data': post_contents_data, 'user_data': self.request.session['user_data']})


class LoadPostLikesData(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def post(self, request):
        post_db_id = self.request.POST.get('post_db_id')
        search_value = self.request.POST.get('search_value')

        queryset = TargetPostLikesData.objects.filter(post_db_data_id=post_db_id)
        if search_value != '':
            queryset = queryset.filter(Q(username__icontains=search_value) | Q(full_name__icontains=search_value))

        paginator = Paginator(queryset, 20)
        total_likes_page = int(paginator.num_pages)
        page_number = int(self.request.POST.get('page', 1))
        if page_number <= total_likes_page:
            post_likes_data = paginator.get_page(page_number).object_list.values()
            return JsonResponse(list(post_likes_data), safe=False)

        else:
            return HttpResponse('None')


class LoadPostCommentsData(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def post(self, request):
        post_db_id = self.request.POST.get('post_db_id')
        paginator = Paginator(TargetPostCommentsData.objects.filter(post_db_data=TargetPostsData.objects.get(id=post_db_id)).order_by('created_at'), 10)
        total_comments_page = int(paginator.num_pages)
        page_number = int(self.request.POST.get('page', 1))
        if page_number <= total_comments_page:
            post_comments_data = paginator.get_page(page_number).object_list.values()
            return JsonResponse(list(post_comments_data), safe=False)

        else:
            return HttpResponse('None')


class ShowStoryDetailsPage(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request, story_id):
        story_details_data = TargetStoriesData.objects.get(id=story_id)
        return render(request, 'targets_app/story_details_page.html', {'page_name': 'targets_list_page', 'story_details_data': story_details_data, 'user_data': self.request.session['user_data']})


class ShowHighlightStoryDetailsPage(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request, story_id):
        story_details_data = TargetHighlightDetailsData.objects.get(id=story_id)
        return render(request, 'targets_app/story_details_page.html', {'page_name': 'targets_list_page', 'story_details_data': story_details_data, 'user_data': self.request.session['user_data']})


class ShowUserDetailsPage(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request, instagram_id):
        user_details_data = None
        if TargetFollowersData.objects.filter(instagram_id=instagram_id).exists():
            user_details_data = TargetFollowersData.objects.filter(instagram_id=instagram_id).first()
        elif TargetFollowingsData.objects.filter(instagram_id=instagram_id).exists():
            user_details_data = TargetFollowingsData.objects.filter(instagram_id=instagram_id).first()
        elif TargetPostCommentsData.objects.filter(instagram_id=instagram_id).exists():
            user_details_data = TargetPostCommentsData.objects.filter(instagram_id=instagram_id).first()
        elif TargetPostLikesData.objects.filter(instagram_id=instagram_id).exists():
            user_details_data = TargetPostLikesData.objects.filter(instagram_id=instagram_id).first()

        return render(request, 'targets_app/user_details_page.html', {'page_name': 'targets_list_page', 'user_details_data': user_details_data, 'user_data': self.request.session['user_data']})
