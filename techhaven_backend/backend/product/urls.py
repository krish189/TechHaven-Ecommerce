from django.urls import path
from . import views

urlpatterns = [
    path('filter-laptops/', views.filter_laptops, name='filter-laptops'),
    path('filter-laptop-by-name/',views.filter_laptop_by_name,name='filter-laptop-by-name'),
    path('filter-speakers/', views.filter_speakers, name='filter-speakers'),
    path('filter-speaker-by-name/',views.filter_speaker_by_name,name='filter-speaker-by-name'),
]
