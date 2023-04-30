# Generated by Django 3.2.8 on 2023-04-30 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('faculty', '0008_auto_20230430_1159'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='faculty',
            name='subject_preference',
        ),
        migrations.AddField(
            model_name='faculty',
            name='subject_1',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='faculty',
            name='subject_2',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='faculty',
            name='subject_3',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]