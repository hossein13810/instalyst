import json
import time

from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse
from django.shortcuts import render
from django.views import View

from scraper_app.scraping_defs.base_api_generator import scraper_function
from targets_app.models import TargetsData

messages = {
    'text': 'test',
    'send': True
}

stop_scraping_flag = False


class ScrapingPage(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request, target_id):
        all_targets_data = TargetsData.objects.all()
        return render(request, 'scraper_app/scraping_page.html', {'page_name': 'scraping_page', 'all_targets_data': all_targets_data, 'target_id': target_id, 'user_data': self.request.session['user_data']})


class ScraperClass(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def post(self, request):
        global stop_scraping_flag
        stop_scraping_flag = False
        targets_user_name_list = self.request.POST.get('targets_user_name_list').split(',')
        scrap_functions = self.request.POST.get('scrap_functions')
        scrap_functions = dict(json.loads(scrap_functions))

        for message in scraper_function(scrap_functions=scrap_functions, targets_username_list=targets_user_name_list, user_db_id=self.request.session['user_data']['user_db_id']):
            if stop_scraping_flag:
                return HttpResponse('scraping stopped')
            if message != 'error':
                SendOperationsMessages.update_message(message)
                time.sleep(0.2)
            else:
                return HttpResponse('error')

        return HttpResponse('success')


class StopScraping(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request):
        global stop_scraping_flag
        stop_scraping_flag = True
        return HttpResponse('Done')


class SendOperationsMessages(LoginRequiredMixin, View):
    login_url = '/'
    redirect_field_name = 'next'

    def get(self, request):
        if not messages['send']:
            messages['send'] = True
            return HttpResponse(messages['text'])
        else:
            return HttpResponse('None')

    @staticmethod
    def update_message(new_message):
        messages['text'] = new_message
        messages['send'] = False
