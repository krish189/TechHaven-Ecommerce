from django.urls import path
from .views import submit_warranty_registration

urlpatterns = [
    path('submit-warranty-registration/', submit_warranty_registration, name='submit_warranty_registration'),
]