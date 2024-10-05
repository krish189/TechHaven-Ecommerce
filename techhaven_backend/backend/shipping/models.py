from django.db import models

# Shipping Info
class ShippingInfo(models.Model):
    fullname = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    street_address = models.TextField()
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    postal_code = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.fullname}${self.email}${self.phone_number}${self.street_address}${self.city}${self.state}${self.country}"