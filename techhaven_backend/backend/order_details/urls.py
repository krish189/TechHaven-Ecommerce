from django.urls import path
from.views  import order_details

urlpatterns = [
    path('orders/', order_details, name='order_details'),
]