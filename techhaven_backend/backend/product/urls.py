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
    path('filter-ledprojector-by-name/', views.filter_LedProjector_by_name, name='filter_LedProjector_by_name'),
    path('filter-microphone/', views.filter_Microphone, name='filter_Microphone'),
    path('filter-microphone-by-name/', views.filter_Microphone_by_name, name='filter_Microphone_by_name'),
    path('filter-computer-accessories/', views.filter_computer_accessories, name='filter-computer-accessories'),
    path('filter-computer-accessories-by-name/', views.filter_computer_accessories_by_name, name='filter-computer-accessories-by-name'),
    path('filter-laptop-accessories/', views.filter_laptop_accessories, name='filter-laptop-accessories'),
    path('filter-laptop-accessories-by-name/', views.filter_laptop_accessories_by_name, name='filter-laptop-accessories-by-name'),
    path('filter-mobile-accessories/', views.filter_mobile_accessories, name='filter-mobile-accessories'),
    path('filter-mobile-accessories-by-name/', views.filter_mobile_accessories_by_name, name='filter-mobile-accessories-by-name'),
    path('filter-hdmi-accessories/', views.filter_hdmi_accessories, name='filter-hdmi-accessories'),
    path('filter-hdmi-accessories-by-name/', views.filter_hdmi_accessories_by_name, name='filter-hdmi-accessories-by-name'),
    path('filter-bs/', views.filter_bs, name='filter_bs'),
    path('filter-bs-by-name/', views.filter_bs_by_name, name='filter_bs_by_name'),
    path('filter-keyboard/', views.filter_keyboard, name='filter-keyboard'),
    path('filter-keyboard-by-name/', views.filter_keyboard_by_name, name='filter-keyboard-by-name'),
    path('filter-mouse/', views.filter_mouse, name='filter-mouse'),
    path('filter-mouse-by-name/', views.filter_mouse_by_name, name='filter-mouse-by-name'),
    path('filter-monitor/', views.filter_monitor, name='filter-monitor'),
    path('filter-monitor-by-name/', views.filter_monitor_by_name, name='filter-monitor-by-name')
]
