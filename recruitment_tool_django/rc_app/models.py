from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class ToDoItem(models.Model):
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)

class Seeker(models.Model):

    DEGREE_CHOICES = [
        ('PhD', 'PhD'),
        ('Bachelor', "Bachelor's Degree"),
        ('HighSchool', 'High School Diploma')
    ]

    name = models.CharField(max_length=30)
    description = models.TextField()
    email = models.CharField(max_length=30)
    phone_number = models.CharField(max_length=15)
    location = models.CharField(max_length=30)
    job_title = models.CharField(max_length=40)
    current_company = models.CharField(max_length=30)
    skills = models.JSONField(default=list)
    languages = models.JSONField(default=list)
    certifications = models.JSONField(default=list)
    linkedin_url = models.CharField(max_length=60)
    experience_years = models.PositiveSmallIntegerField()
    education_level = models.CharField(max_length=20, choices=DEGREE_CHOICES)
    desired_salary = models.PositiveIntegerField()
    availibility = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name