from django.urls import path
from . import views

urlpatterns = [
    path('filter-laptops/', views.filter_laptops, name='filter-laptops'),
    path('filter-laptop-by-name/',views.filter_laptop_by_name,name='filter-laptop-by-name')
]
