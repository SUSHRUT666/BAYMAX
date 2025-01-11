from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UploadedFile
from .models import Reminder

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password', 'email']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password']
        )
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    

class FoodSerializer(serializers.Serializer):
    food = serializers.CharField(max_length=100)
    
class SymptomSerializer(serializers.Serializer):
    symptoms = serializers.ListField(child=serializers.CharField())
    
class UploadedFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedFile
        fields = '__all__'
        
class ReminderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reminder
        fields = '__all__'
