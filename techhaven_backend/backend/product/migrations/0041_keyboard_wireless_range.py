# Generated by Django 5.1 on 2024-09-27 04:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0040_keyboard_ergonomics'),
    ]

    operations = [
        migrations.AddField(
            model_name='keyboard',
            name='wireless_range',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
