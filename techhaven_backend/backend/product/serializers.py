from rest_framework import serializers
from .models import Laptop, Speaker, HpEb, LedTv, LedProjector, Microphone, ComputerAccessories, LaptopAccessories, MobileAccessories, HdmiAccessories, BarcodeScanner, Keyboard, Mouse, Monitor, KeyboardMouseCombo, HomeTheater

# Create a serializer for the Laptop model
class LaptopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laptop
        fields = '__all__'

# Create a serializer for the Speaker model
class SpeakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Speaker
        fields = '__all__'

# Create a serializer for the Headphone/Earbud model
class HpEbSerializer(serializers.ModelSerializer):
    class Meta:
        model = HpEb
        fields = '__all__'

# Create a serializer for the LedTv model
class LedTvSerializer(serializers.ModelSerializer):
    class Meta:
        model = LedTv
        fields = '__all__'

# Create a serializer for the Led Projector model
class LedProjectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = LedProjector
        fields = '__all__'

# Create a serializer for the Microphone model
class MicrophoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Microphone
        fields = '__all__'

# Create a serializer for the Computer Accessories model
class ComputerAccessoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComputerAccessories
        fields = '__all__'

# Create a serializer for the Laptop Accessories model
class LaptopAccessoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = LaptopAccessories
        fields = '__all__'

# Create a serializer for the Mobile Accessories model
class MobileAccessoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = MobileAccessories
        fields = '__all__'

# Create a serializer for the Hdmi Accessories model
class HdmiAccessoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = HdmiAccessories
        fields = '__all__'

# Create a serializer for the Barcode Scanner model
class BarcodeScannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = BarcodeScanner
        fields = '__all__'

# Create a serializer for the Keyboard model
class KeyboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyboard
        fields = '__all__'

# Create a serializer for the Mouse model
class MouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mouse
        fields = '__all__'

# Create a serializer for the Monitor model
class MonitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Monitor
        fields = '__all__'

# Create a serializer for the Keyboard Mouse Combo model
class KeyboardMouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = KeyboardMouseCombo
        fields = '__all__'

# Create a serializer for the Home Theater model
class HomeTheaterSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeTheater
        fields = '__all__'