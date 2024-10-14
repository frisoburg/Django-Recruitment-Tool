# Generated by Django 5.1.2 on 2024-10-14 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rc_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Seeker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('description', models.TextField()),
                ('email', models.CharField(max_length=30)),
                ('phone_number', models.CharField(max_length=15)),
                ('location', models.CharField(max_length=30)),
                ('job_title', models.CharField(max_length=40)),
                ('current_company', models.CharField(max_length=30)),
                ('skills', models.JSONField(default=list)),
                ('languages', models.JSONField(default=list)),
                ('certifications', models.JSONField(default=list)),
                ('linkedin_url', models.CharField(max_length=60)),
                ('experience_years', models.PositiveSmallIntegerField()),
                ('education_level', models.CharField(choices=[('PhD', 'PhD'), ('Bachelor', "Bachelor's Degree"), ('HighSchool', 'High School Diploma')], max_length=20)),
                ('desired_salary', models.PositiveIntegerField()),
                ('availibility', models.CharField(max_length=30)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
