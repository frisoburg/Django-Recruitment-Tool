from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Seeker


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user

class SeekerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seeker
        fields = [
            "id", "name", "description", "email", "phone_number", "location", 
            "job_title", "current_company", "skills", "languages", "certifications", 
            "linkedin_url", "experience_years", "education_level", "desired_salary", 
            "availibility", "created_at"
        ]
