from rest_framework import serializers
from .models import Laptop, Speaker

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
    