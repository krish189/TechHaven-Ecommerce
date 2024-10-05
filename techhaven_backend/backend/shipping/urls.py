from django.urls import path
from .views import shipping_info

urlpatterns = [
    path('shipping-info/', shipping_info, name='add_shipping_info'),
]
