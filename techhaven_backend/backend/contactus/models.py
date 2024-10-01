from django.db import models

class ContactUs(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    product = models.CharField(max_length=255)
    support_type = models.CharField(max_length=255)
    message = models.TextField()
    language = models.TextField()

    def __str__(self):
        return f"{self.name}${self.email}"

