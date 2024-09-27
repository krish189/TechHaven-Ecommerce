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
    weight = models.DecimalField(max_digits=6, decimal_places=4, null=True, blank=True)
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
    
class Microphone(BaseProduct):
    microphone_type = models.CharField(max_length=255, null=False)  
    connectivity = models.CharField(max_length=255, null=True, blank=True)  
    frequency_response = models.CharField(max_length=255, null=True, blank=True)  
    sensitivity = models.CharField(max_length=100, null=True, blank=True)  
    impedance = models.CharField(max_length=100, null=True, blank=True)  
    polar_pattern = models.CharField(max_length=100, null=True, blank=True) 
    diaphragm_size = models.CharField(max_length=100, null=True, blank=True) 
    signal_to_noise_ratio = models.CharField(max_length=100, null=True, blank=True)  
    max_spl = models.CharField(max_length=100, null=True, blank=True)  
    pad_switch = models.BooleanField(default=False)  
    low_cut_filter = models.BooleanField(default=False)  
    shock_mount_included = models.BooleanField(default=False)  
    pop_filter_included = models.BooleanField(default=False)  
    phantom_power_required = models.BooleanField(default=False)  
    wireless_connectivity = models.BooleanField(default=False)  
    audio_sample_rate = models.CharField(max_length=100, null=True, blank=True)  
    mounting_options = models.CharField(max_length=255, null=True, blank=True)  
    included_accessories = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.name} - {self.microphone_type}, {self.polar_pattern}"
    
class ComputerAccessories(BaseProduct):
    accessory_category = models.CharField(max_length=255, null=False)
    storage_capacity = models.CharField(max_length=255, null=True, blank=True)
    interface_type = models.CharField(max_length=255, null=True, blank=True)
    form_factor = models.CharField(max_length=100, null=True, blank=True)
    read_speed = models.CharField(max_length=100, null=True, blank=True)
    write_speed = models.CharField(max_length=100, null=True, blank=True)
    rpm = models.IntegerField(null=True, blank=True)
    cache_size = models.CharField(max_length=100, null=True, blank=True)
    fan_speed = models.CharField(max_length=100, null=True, blank=True)
    airflow = models.CharField(max_length=100, null=True, blank=True)
    noise_level = models.CharField(max_length=100, null=True, blank=True)
    bearing_type = models.CharField(max_length=100, null=True, blank=True)
    fan_size = models.CharField(max_length=100, null=True, blank=True)
    gpu_chipset = models.CharField(max_length=255, null=True, blank=True)
    memory_size = models.CharField(max_length=255, null=True, blank=True)
    memory_type = models.CharField(max_length=100, null=True, blank=True)
    core_clock = models.CharField(max_length=100, null=True, blank=True)
    boost_clock = models.CharField(max_length=100, null=True, blank=True)
    gpu_fan_included = models.BooleanField(default=False)
    gpu_fan_name = models.CharField(max_length=255, null=True, blank=True)
    power_consumption = models.CharField(max_length=100, null=True, blank=True)
    output_ports = models.CharField(max_length=255, null=True, blank=True)
    audio_channels = models.CharField(max_length=100, null=True, blank=True)
    signal_to_noise_ratio = models.CharField(max_length=100, null=True, blank=True)
    sample_rate = models.CharField(max_length=100, null=True, blank=True)
    audio_processor = models.CharField(max_length=255, null=True, blank=True)
    input_ports = models.CharField(max_length=255, null=True, blank=True)
    usb_version = models.CharField(max_length=50, null=True, blank=True)
    interface = models.CharField(max_length=50, null=True, blank=True)
    data_transfer_rate = models.CharField(max_length=100, null=True, blank=True)
    number_of_ports = models.IntegerField(null=True, blank=True)
    power_output_per_port = models.CharField(max_length=100, null=True, blank=True)
    chipset = models.CharField(max_length=255, null=True, blank=True)
    socket_type = models.CharField(max_length=100, null=True, blank=True)
    ram_slots = models.IntegerField(null=True, blank=True)
    max_ram_capacity = models.CharField(max_length=100, null=True, blank=True)
    storage_ports = models.CharField(max_length=255, null=True, blank=True)
    expansion_slots = models.CharField(max_length=255, null=True, blank=True)
    usb_ports = models.CharField(max_length=255, null=True, blank=True)
    network_ports = models.CharField(max_length=255, null=True, blank=True)
    included_items = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.name} - {self.accessory_category}"

class LaptopAccessories(BaseProduct):
    accessory_category = models.CharField(max_length=255, null=False)
    material = models.CharField(max_length=255, null=True, blank=True)
    adjustable_height = models.BooleanField(default=False)
    max_adjustable_height = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    cooling_feature = models.BooleanField(default=False)
    weight_capacity = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    fan_speed = models.CharField(max_length=100, null=True, blank=True)
    number_of_fans = models.IntegerField(null=True, blank=True)
    led_lighting = models.BooleanField(default=False)
    noise_level = models.CharField(max_length=100, null=True, blank=True)
    water_resistant = models.BooleanField(default=False)
    ports = models.CharField(max_length=255, null=True, blank=True)
    power_delivery = models.BooleanField(default=False)
    compatible_devices = models.CharField(max_length=255, null=True, blank=True)
    number_of_ports = models.IntegerField(null=True, blank=True)
    usb_version = models.CharField(max_length=50, null=True, blank=True)
    input_ports = models.CharField(max_length=255, null=True, blank=True)
    output_ports = models.CharField(max_length=255, null=True, blank=True)
    fast_charging = models.BooleanField(default=False)
    included_items = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.name} - {self.accessory_category}"

class MobileAccessories(BaseProduct):
    accessory_category = models.CharField(max_length=255, null=False)
    holder_type = models.CharField(max_length=255, null=True, blank=True)
    mounting_mechanism = models.CharField(max_length=255, null=True, blank=True)
    rotation = models.CharField(max_length=255, null=True, blank=True)
    material = models.CharField(max_length=255, null=True, blank=True)
    adjustable_height = models.BooleanField(default=False)
    max_adjustable_height = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    foldable = models.BooleanField(default=False)
    clamp_size = models.CharField(max_length=255, null=True, blank=True)
    compatible_devices = models.CharField(max_length=255, null=True, blank=True)
    cable_type = models.CharField(max_length=255, null=True, blank=True)
    length = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    max_output = models.CharField(max_length=255, null=True, blank=True)
    data_transfer_speed = models.CharField(max_length=100, null=True, blank=True)
    connector_type = models.CharField(max_length=255, null=True, blank=True)
    fast_charging = models.BooleanField(default=False)
    durability_rating = models.CharField(max_length=255, null=True, blank=True)
    usb_version = models.CharField(max_length=100, null=True, blank=True)
    port_type = models.CharField(max_length=255, null=True, blank=True)
    card_slots = models.CharField(max_length=255, null=True, blank=True)
    kickstand_feature = models.BooleanField(default=False)
    magnetic_closure = models.BooleanField(default=False)
    rfid_protection = models.BooleanField(default=False)
    belt_clip = models.BooleanField(default=False)
    capacity = models.CharField(max_length=255, null=True, blank=True)
    speed_class = models.CharField(max_length=255, null=True, blank=True)
    read_speed = models.CharField(max_length=100, null=True, blank=True)
    write_speed = models.CharField(max_length=100, null=True, blank=True)
    form_factor = models.CharField(max_length=255, null=True, blank=True)
    water_proof = models.BooleanField(default=False)
    shock_proof = models.BooleanField(default=False)
    xray_proof = models.BooleanField(default=False)
    tip_type = models.CharField(max_length=255, null=True, blank=True)
    pressure_sensitivity = models.CharField(max_length=100, null=True, blank=True)
    palm_rejection_support = models.BooleanField(default=False)
    battery_life = models.CharField(max_length=100, null=True, blank=True)
    charging_method = models.CharField(max_length=255, null=True, blank=True)
    tilt_sensitivity = models.BooleanField(default=False)
    replaceable_tips = models.BooleanField(default=False)
    included_items = models.TextField(null=True, blank=True)
     
    def __str__(self):
        return f"{self.name} - {self.accessory_category}"

class HdmiAccessories(BaseProduct):
    accessory_category = models.CharField(max_length=255, null=False)
    cable_length = models.CharField(max_length=100, null=True, blank=True)
    cable_type = models.CharField(max_length=100, null=True, blank=True) 
    connector_type = models.CharField(max_length=100, null=True, blank=True)
    gold_plated_connectors = models.BooleanField(default=False)
    shielding = models.CharField(max_length=100, null=True, blank=True)
    resolution_support = models.CharField(max_length=100, null=True, blank=True)
    ethernet_support = models.BooleanField(default=False)
    adapter_type = models.CharField(max_length=100, null=True, blank=True)
    connector_type_input = models.CharField(max_length=100, null=True, blank=True)
    connector_type_output = models.CharField(max_length=100, null=True, blank=True)
    resolution_support = models.CharField(max_length=100, null=True, blank=True)
    audio_support = models.BooleanField(default=False)
    active_passive = models.CharField(max_length=50, null=True, blank=True)
    power_required = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.name} - {self.accessory_category}"

class BarcodeScanner(BaseProduct):
    scanner_type = models.CharField(max_length=255, null=False)  
    scan_speed = models.CharField(max_length=100, null=True, blank=True)  
    connectivity = models.CharField(max_length=255, null=True, blank=True)  
    battery_life = models.CharField(max_length=100, null=True, blank=True)  
    supported_barcode_types = models.TextField(null=True, blank=True)  
    sensor_type = models.CharField(max_length=100, null=True, blank=True)  
    ruggedness = models.CharField(max_length=100, null=True, blank=True)  
    led_indicator = models.BooleanField(default=False)
    interface_type = models.CharField(max_length=100, null=True, blank=True)  
    software_compatibility = models.TextField(null=True, blank=True)  
    operating_temperature = models.CharField(max_length=100, null=True, blank=True)  
    storage_temperature = models.CharField(max_length=100, null=True, blank=True) 

    def __str__(self):
        return f"{self.name} - {self.scanner_type}, {self.connectivity}"

class Keyboard(BaseProduct):
    peripherals_category = models.CharField(max_length=255)
    keyboard_category = models.CharField(max_length=255, null=True, blank=True)
    keyboard_type = models.CharField(max_length=255)
    no_of_keys = models.CharField(max_length=255, null=True, blank=True)
    layout = models.CharField(max_length=100, null=True, blank=True)
    key_switch_type = models.CharField(max_length=100, null=True, blank=True)
    backlighting = models.BooleanField(default=False)
    programmable_keys = models.BooleanField(default=False)
    anti_ghosting = models.BooleanField(default=False)
    media_controls = models.BooleanField(default=False)
    ergonomics = models.BooleanField(default=False)
    phone_holder = models.BooleanField(default=False)
    cable_length = models.CharField(max_length=100, null=True, blank=True)
    connection_type = models.CharField(max_length=50, null=True, blank=True)
    noise_level = models.CharField(max_length=255, null=True, blank=True)
    noise_reduction_percent = models.CharField(max_length=255, null=True, blank=True)
    wireless_connectivity = models.CharField(max_length=100, null=True, blank=True)
    wireless_range = models.CharField(max_length=100, null=True, blank=True)
    battery_life = models.CharField(max_length=100, null=True, blank=True)
    recharge_time = models.CharField(max_length=100, null=True, blank=True)
    battery_type = models.CharField(max_length=50, null=True, blank=True)
    included_items = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.name} - {self.keyboard_type}"    
      
class Mouse(BaseProduct):
    peripherals_category = models.CharField(max_length=255, null=True, blank=True)
    mouse_type = models.CharField(max_length=255)
    cable_length = models.CharField(max_length=100, null=True, blank=True)
    connectivity_type = models.CharField(max_length=255, null=True, blank=True)
    dpi = models.CharField(max_length=255, null=True, blank=True)
    ergonomics = models.BooleanField(default=False)
    no_of_buttons = models.IntegerField()
    led_lighting = models.BooleanField(default=False)
    motion_detection = models.CharField(max_length=255, null=True, blank=True)
    wireless_range = models.CharField(max_length=100, null=True, blank=True)
    battery_life = models.CharField(max_length=100, null=True, blank=True)
    battery_type = models.CharField(max_length=255, null=True, blank=True)
    connectivity = models.CharField(max_length=255, null=True, blank=True)
    recharge_time = models.CharField(max_length=100, null=True, blank=True)
    included_items = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.name} - {self.mouse_type}"

class Monitor(BaseProduct):
    peripherals_category = models.CharField(max_length=255)
    monitor_type = models.CharField(max_length=255)
    screen_size = models.CharField(max_length=100)
    resolution = models.CharField(max_length=100)
    refresh_rate = models.CharField(max_length=100, null=True, blank=True)
    panel_type = models.CharField(max_length=255, null=True, blank=True)
    brightness = models.CharField(max_length=100, null=True, blank=True)
    contrast_ratio = models.CharField(max_length=100, null=True, blank=True)
    response_time = models.CharField(max_length=100, null=True, blank=True)
    connectivity_options = models.CharField(max_length=255, null=True, blank=True)
    aspect_ratio = models.CharField(max_length=100, null=True, blank=True)
    color_gamut = models.CharField(max_length=255, null=True, blank=True)
    touch_support = models.BooleanField(default=False)
    portability_features = models.TextField(null=True, blank=True)
    curved_radius = models.CharField(max_length=255, null=True, blank=True)
    vesa_mount_compatible = models.BooleanField(default=False)
    included_items = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return f"{self.name} - {self.monitor_type}"
  
admin.site.register(Laptop)
admin.site.register(Speaker)
admin.site.register(HpEb)
admin.site.register(LedTv)
admin.site.register(LedProjector)
admin.site.register(Microphone)
admin.site.register(ComputerAccessories)
admin.site.register(LaptopAccessories)
admin.site.register(MobileAccessories)
admin.site.register(HdmiAccessories)
admin.site.register(BarcodeScanner)
admin.site.register(Keyboard)
admin.site.register(Mouse)
admin.site.register(Monitor)