from rest_framework import serializers
from .models import Laptop, Speaker, HpEb, LedTv, LedProjector

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