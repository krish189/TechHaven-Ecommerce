# Generated by Django 5.1 on 2024-09-21 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0023_laptopaccessories'),
    ]

    operations = [
        migrations.AddField(
            model_name='laptopaccessories',
            name='max_adjustable_height',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True),
        ),
    ]