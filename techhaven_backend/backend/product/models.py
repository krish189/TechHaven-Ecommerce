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
    weight = models.DecimalField(max_digits=6, decimal_places=3, null=True, blank=True)
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


class HpEb(BaseProduct):
    headphone_earbud_type = models.CharField(max_length=255)
    design_type = models.CharField(max_length=255, null=True, blank=True)
    connectivity = models.CharField(max_length=255)
    noise_cancelling = models.BooleanField(default=False)
    microphone = models.BooleanField(default=False)
    bluetooth_version = models.CharField(max_length=10, null=True, blank=True)  
    battery_life = models.CharField(max_length=100, null=True, blank=True)  
    sound_isolation = models.CharField(max_length=100, null=True, blank=True)  
    adjustable_headband = models.BooleanField(default=False)  
    foldable = models.BooleanField(default=False)  
    driver_size = models.CharField(max_length=100, null=True, blank=True)
    impedance = models.CharField(max_length=100, null=True, blank=True)
    frequency_response = models.CharField(max_length=100, null=True, blank=True)
    comfort_features = models.TextField(null=True, blank=True)
    water_resistance = models.BooleanField(default=False)
    charging_case = models.BooleanField(default=False)  
    charging_case_dimensions = models.CharField(max_length=255, null=True, blank=True)
    charging_case_weight = models.DecimalField(max_digits=6, decimal_places=3, null=True, blank=True)
    touch_controls = models.BooleanField(default=False)  
    ear_tip_sizes = models.CharField(max_length=255, null=True, blank=True)  
    microphone_sensitivity = models.CharField(max_length=100, null=True, blank=True)  
    ambient_sound_mode = models.BooleanField(default=False)  
    anc_levels = models.CharField(max_length=100, null=True, blank=True)  

    def __str__(self):
        return f"{self.name} - {self.headphone_earbud_type}, {self.connectivity}"
    
class LedTv(BaseProduct):
    tv_type = models.CharField(max_length=255)
    screen_size = models.CharField(max_length=10, null=False)
    display_technology = models.CharField(max_length=50, null=True, blank=True)
    resolution = models.CharField(max_length=50, null=False)
    hdr_support = models.BooleanField(default=False)
    refresh_rate = models.CharField(max_length=50, null=True, blank=True)
    operating_system = models.CharField(max_length=50, null=True, blank=True)
    audio_output = models.CharField(max_length=100, null=True, blank=True)
    dolby_atmos = models.BooleanField(default=False)
    hdmi_ports = models.IntegerField(null=True, blank=True)
    usb_ports = models.IntegerField(null=True, blank=True)
    bluetooth_version = models.CharField(max_length=10, null=True, blank=True)
    wifi_support = models.BooleanField(default=False)
    wifi_version = models.CharField(max_length=10, null=True, blank=True)
    ethernet_port = models.BooleanField(default=False)
    vesa_mount = models.CharField(max_length=50, null=True, blank=True)
    energy_efficiency_rating = models.CharField(max_length=10, null=True, blank=True)
    panel_type = models.CharField(max_length=50, null=True, blank=True)
    upscaling_technology = models.CharField(max_length=100, null=True, blank=True)
    streaming_services = models.TextField(null=True, blank=True)
    vrr_support = models.BooleanField(default=False)
    allm_support = models.BooleanField(default=False)
    bezel_size = models.CharField(max_length=50, null=True, blank=True)
    power_consumption = models.CharField(max_length=100, null=True, blank=True)
    standby_power_consumption = models.CharField(max_length=50, null=True, blank=True)
    backlight_type = models.CharField(max_length=100, null=True, blank=True)
    voice_assistant = models.CharField(max_length=100, null=True, blank=True)
    included_accessories = models.TextField(null=True, blank=True)
    led_type = models.CharField(max_length=50, null=True, blank=True)
    screen_curvature = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return f"{self.name} - {self.tv_type}"

class LedProjector(BaseProduct):
    projector_type = models.CharField(max_length=100, null=False)
    native_resolution = models.CharField(max_length=50, null=False)
    brightness = models.IntegerField(null=False)
    contrast_ratio = models.CharField(max_length=50, null=True, blank=True)
    throw_distance = models.CharField(max_length=50, null=True, blank=True)
    projection_size = models.CharField(max_length=50, null=True, blank=True)
    lamp_life = models.IntegerField(null=True, blank=True)
    aspect_ratio = models.CharField(max_length=20, null=True, blank=True)
    zoom = models.CharField(max_length=50, null=True, blank=True)
    lens_shift = models.BooleanField(default=False)
    keystone_correction = models.BooleanField(default=False)
    input_ports = models.CharField(max_length=255, null=True, blank=True)
    wireless_connectivity = models.CharField(max_length=255, null=True, blank=True)
    speaker_output = models.CharField(max_length=50, null=True, blank=True)
    three_d_support = models.BooleanField(default=False)
    remote_control = models.BooleanField(default=False)
    included_accessories = models.TextField(null=True, blank=True)
    projection_technology = models.CharField(max_length=50, null=True, blank=True)
    hdr_support = models.BooleanField(default=False)
    noise_level = models.CharField(max_length=20, null=True, blank=True)
    power_consumption = models.CharField(max_length=100, null=True, blank=True)
    projection_ratio = models.CharField(max_length=50, null=True, blank=True)
    focus_type = models.CharField(max_length=50, null=True, blank=True)
    bluetooth_audio = models.BooleanField(default=False)
    smart_features = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} - {self.projector_type}, {self.native_resolution}"

admin.site.register(Laptop)
admin.site.register(Speaker)
admin.site.register(HpEb)
admin.site.register(LedTv)
admin.site.register(LedProjector)