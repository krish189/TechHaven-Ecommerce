from django.db import models

class WarrantyRegistraion(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    street_address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    postal_code = models.CharField(max_length=10)
    product_category = models.CharField(max_length=255)
    product_name = models.CharField(max_length=255)
    brand = models.CharField(max_length=255)
    model_no = models.CharField(max_length=255)
    serial_no = models.CharField(max_length=255)
    price = models.CharField(max_length=255)
    pdate = models.CharField(max_length=255)
    receiveupdate = models.CharField(max_length=3)

    def __str__(self):
        return f"{self.name}${self.email}${self.product_name}${self.pdate}"
