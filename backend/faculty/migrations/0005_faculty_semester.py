# Generated by Django 3.2.8 on 2023-04-28 19:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('faculty', '0004_subject_added_by'),
    ]

    operations = [
        migrations.AddField(
            model_name='faculty',
            name='semester',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='semester_teaching', to='faculty.semester'),
        ),
    ]
