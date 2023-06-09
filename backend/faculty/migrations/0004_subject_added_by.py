# Generated by Django 3.2.8 on 2023-04-28 19:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_auto_20230428_1851'),
        ('faculty', '0003_semester_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='subject',
            name='added_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='subject_adding_user', to='account.user'),
        ),
    ]
