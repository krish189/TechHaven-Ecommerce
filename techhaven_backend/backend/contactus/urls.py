from django.urls import path
from .views import submit_contact_us

urlpatterns = [
    path('submit-contact-us/', submit_contact_us, name='submit_contact_us'),
]