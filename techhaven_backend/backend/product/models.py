from django.db import models
from django.contrib import admin

class BaseProduct(models.Model):
    name = models.CharField(max_length=255)
    description_para = models.TextField(default= "")
    description_points = models.TextField(default= "")
    price = models.DecimalField(max_digits=10,decimal_places=2)
    discount_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    sku = models.CharField(max_length=100, unique=True)
    brand = models.CharField(max_length=255)
    images = models.JSONField(default=list) 
    stock = models.IntegerField()
    is_available = models.BooleanField(default=True)
    date_added = models.DateTimeField(auto_now_add=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    num_reviews = models.IntegerField(default=0)
    dimensions = models.CharField(max_length=255, null=True, blank=True)
    weight = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    warranty = models.CharField(max_length=255, null=True, blank=True)
    color = models.CharField(max_length=100, null=True, blank=True)
    
    class Meta:
        abstract = True

    def __str__(self):
        return self.name

class Laptop(BaseProduct):
    laptop_type = models.CharField(max_length=255, null=False)
    cpu = models.CharField(max_length=255, null=True, blank=True)
    ram = models.CharField(max_length=255, null=True, blank=True)
    storage = models.CharField(max_length=255, null=True, blank=True)
    display = models.CharField(max_length=255, null=True, blank=True)
    graphics = models.CharField(max_length=255, null=True, blank=True)
    operating_system = models.CharField(max_length=255, null=True, blank=True)
    battery_life = models.CharField(max_length=255, null=True, blank=True)
    touchscreen = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} - {self.cpu}, {self.ram}, {self.storage}, {self.display}"
    
class Speaker(BaseProduct):
    speaker_type = models.CharField(max_length=255, null=False)
    power_output = models.CharField(max_length=100, null=True, blank=True)
    connectivity = models.CharField(max_length=255, null=True, blank=True)
    battery_life = models.CharField(max_length=255, null=True, blank=True)
    frequency_response = models.CharField(max_length=255, null=True, blank=True)
    waterproof = models.BooleanField(default=False)
    smart_assistant = models.CharField(max_length=100, null=True, blank=True)
    microphone = models.BooleanField(default=False)
    bass_boost = models.BooleanField(default=False)
    led_lighting = models.BooleanField(default=False)
    multi_device_pairing = models.BooleanField(default=False)
    audio_inputs = models.CharField(max_length=255, null=True, blank=True)
    driver_size = models.CharField(max_length=255, null=True, blank=True)
    led_lighting_color = models.CharField(max_length=255, null=True, blank=True)

    
admin.site.register(Laptop)
admin.site.register(Speaker)
    