# Generated by Django 3.2.8 on 2023-04-28 19:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('faculty', '0002_subject_semester'),
    ]

    operations = [
        migrations.AddField(
            model_name='semester',
            name='number',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
