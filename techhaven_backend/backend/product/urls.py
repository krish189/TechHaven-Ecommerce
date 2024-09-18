from django.urls import path
from . import views

urlpatterns = [
    path('filter-laptops/', views.filter_laptops, name='filter-laptops'),
    path('filter-laptop-by-name/', views.filter_laptop_by_name, name='filter-laptop-by-name'),
    path('filter-speakers/', views.filter_speakers, name='filter-speakers'),
    path('filter-speaker-by-name/', views.filter_speaker_by_name, name='filter-speaker-by-name'),
    path('filter-hp-eb/', views.filter_Hp_Eb, name='filter-Hp-Eb'),
    path('filter-hp-eb-by-name/', views.filter_Hp_Eb_by_name, name='filter-Hp-Eb-by-name'),
    path('filter-ledtv/', views.filter_LedTv, name='filter_LedTv'),
    path('filter-ledtv-by-name/', views.filter_LedTv_by_name, name='filter_LedTv_by_name'),
    path('filter-ledprojector/', views.filter_LedProjector, name='filter_LedProjector'),
    path('filter-ledprojector-by-name/', views.filter_LedProjector_by_name, name='filter_LedProjector_by_name')
]
