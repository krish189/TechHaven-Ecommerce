# Generated by Django 5.1 on 2024-09-14 07:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0006_speaker'),
    ]

    operations = [
        migrations.AddField(
            model_name='speaker',
            name='led_lighting_color',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
