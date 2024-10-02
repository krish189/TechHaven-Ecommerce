from rest_framework import serializers
from .models import WarrantyRegistraion

class WarrantyRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = WarrantyRegistraion
        fields = '__all__'