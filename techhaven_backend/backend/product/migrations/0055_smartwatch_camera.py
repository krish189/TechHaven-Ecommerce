# Generated by Django 5.1 on 2024-09-30 12:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0054_smartwatch'),
    ]

    operations = [
        migrations.AddField(
            model_name='smartwatch',
            name='camera',
            field=models.BooleanField(default=False),
        ),
    ]
