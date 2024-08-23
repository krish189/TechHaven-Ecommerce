from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import User

# Serializer for handling user data from the Signup component
class UserSerializer(serializers.ModelSerializer):
    # Specifies the model and fields to include in the serializer
    class Meta:
        model = User
        fields = ['name', 'email', 'password', 'phone_number', 'address']

    # Custom create method to save a new user instance with hashed password
    def create(self, validated_data):
        try:
            user = User(
                name=validated_data['name'],
                email=validated_data['email'],
                password=make_password(validated_data['password']),
                phone_number=validated_data.get('phone_number'),
                address=validated_data.get('address'),
            )
            user.save()  # Save the user instance to the database
            return user
        except Exception as e:
            print(f"Error in creating user: {e}")
            raise e

