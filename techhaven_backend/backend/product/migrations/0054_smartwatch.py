# Generated by Django 5.1 on 2024-09-30 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0053_cctvcamera_loop_recording_cctvcamera_material_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='SmartWatch',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description_para', models.TextField(default='')),
                ('description_points', models.TextField(default='')),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('discount_price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('sku', models.CharField(max_length=100, unique=True)),
                ('brand', models.CharField(max_length=255)),
                ('images', models.JSONField(default=list)),
                ('stock', models.IntegerField()),
                ('is_available', models.BooleanField(default=True)),
                ('date_added', models.DateTimeField(auto_now_add=True)),
                ('rating', models.DecimalField(decimal_places=2, default=0, max_digits=3)),
                ('num_reviews', models.IntegerField(default=0)),
                ('dimensions', models.CharField(blank=True, max_length=255, null=True)),
                ('weight', models.CharField(blank=True, max_length=255, null=True)),
                ('warranty', models.CharField(blank=True, max_length=255, null=True)),
                ('color', models.CharField(blank=True, max_length=100, null=True)),
                ('display_type', models.CharField(blank=True, max_length=255, null=True)),
                ('screen_size', models.CharField(blank=True, max_length=255, null=True)),
                ('battery_life', models.CharField(blank=True, max_length=255, null=True)),
                ('charging_time', models.CharField(blank=True, max_length=255, null=True)),
                ('water_resistance', models.CharField(blank=True, max_length=255, null=True)),
                ('connectivity', models.CharField(blank=True, max_length=255, null=True)),
                ('sensors', models.CharField(blank=True, max_length=255, null=True)),
                ('compatibility', models.CharField(blank=True, max_length=255, null=True)),
                ('strap_material', models.CharField(blank=True, max_length=255, null=True)),
                ('features', models.TextField(blank=True, null=True)),
                ('storage_capacity', models.CharField(blank=True, max_length=255, null=True)),
                ('processor', models.CharField(blank=True, max_length=255, null=True)),
                ('ram', models.CharField(blank=True, max_length=255, null=True)),
                ('gps', models.BooleanField(default=False)),
                ('heart_rate_monitor', models.BooleanField(default=False)),
                ('nfc', models.BooleanField(default=False)),
                ('voice_assistant', models.CharField(blank=True, max_length=255, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
