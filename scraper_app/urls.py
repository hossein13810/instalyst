from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from . import views
from .views import ScraperClass

urlpatterns = [
    path('scraping_page/id_<str:target_id>/', views.ScrapingPage.as_view(), name='scraping_page'),
    path('scraper_class/', csrf_exempt(views.ScraperClass.as_view())),
    path('send_operations_messages/', views.SendOperationsMessages.as_view()),
    path('stop_scraping/', views.StopScraping.as_view(), name='stop_scraping'),
]
