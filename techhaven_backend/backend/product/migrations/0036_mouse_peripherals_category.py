# Generated by Django 5.1 on 2024-09-26 06:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0035_mouse_included_items'),
    ]

    operations = [
        migrations.AddField(
            model_name='mouse',
            name='peripherals_category',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]