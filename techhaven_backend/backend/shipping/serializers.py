from rest_framework import serializers
from .models import ShippingInfo

class ShippingInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingInfo
        fields = '__all__'

    # Validate Full Name
    def validate_fullname(self, value):
        if not value.strip():
            raise serializers.ValidationError("Full name cannot be empty.")
        if len(value) < 3:
            raise serializers.ValidationError("Full name must be at least 3 characters long.")
        return value

    # Validate Email
    def validate_email(self, value):
        if not value.strip():
            raise serializers.ValidationError("Email cannot be empty.")
        if "@" not in value or "." not in value.split('@')[-1]:  # Ensuring a valid domain
            raise serializers.ValidationError("Enter a valid email address.")
        return value

    # Validate Phone Number
    def validate_phone_number(self, value):

        if not value[1:].isdigit():
            raise serializers.ValidationError("Phone number must contain only digits.")
        if len(value) < 10 or len(value) > 15:
            raise serializers.ValidationError("Phone number must be between 10 and 15 digits long.")
        return value

    # Validate Street Address
    def validate_street_address(self, value):
        if not value.strip():
            raise serializers.ValidationError("Street address cannot be empty.")
        return value

    # Validate City
    def validate_city(self, value):
        if not value.strip():
            raise serializers.ValidationError("City cannot be empty.")
        if len(value) < 2:
            raise serializers.ValidationError("City name must be at least 2 characters long.")
        return value

    # Validate State
    def validate_state(self, value):
        if not value.strip():
            raise serializers.ValidationError("State cannot be empty.")
        if len(value) < 2:
            raise serializers.ValidationError("State name must be at least 2 characters long.")
        return value

    # Validate Country
    def validate_country(self, value):
        if not value.strip():
            raise serializers.ValidationError("Country cannot be empty.")
        if len(value) < 2:
            raise serializers.ValidationError("Country name must be at least 2 characters long.")
        return value

    # Validate Postal Code
    def validate_postal_code(self, value):
        if not value.isdigit():
            raise serializers.ValidationError("Postal code must contain only digits.")
        if len(value) < 5 or len(value) > 10:
            raise serializers.ValidationError("Postal code must be between 5 and 10 digits long.")
        return value

    def validate(self, data):
        country = data.get('country').lower()
        postal_code = data.get('postal_code')
        
        # Example: Country-specific postal code validation
        if country == 'india' and len(postal_code) != 6:
            raise serializers.ValidationError("Indian postal codes must be exactly 6 digits.")
        if country == 'us' and len(postal_code) != 5:
            raise serializers.ValidationError("US postal codes must be exactly 5 digits.")
        
        return data
