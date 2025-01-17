# Generated by Django 5.1 on 2024-09-14 10:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0007_speaker_led_lighting_color'),
    ]

    operations = [
        migrations.CreateModel(
            name='HeadphoneEarbuds',
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
                ('weight', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('warranty', models.CharField(blank=True, max_length=255, null=True)),
                ('color', models.CharField(blank=True, max_length=100, null=True)),
                ('headphone_earbud_type', models.CharField(max_length=255)),
                ('design_type', models.CharField(blank=True, max_length=255, null=True)),
                ('connectivity', models.CharField(max_length=255)),
                ('noise_cancelling', models.BooleanField(default=False)),
                ('microphone', models.BooleanField(default=False)),
                ('bluetooth_version', models.CharField(blank=True, max_length=10, null=True)),
                ('battery_life', models.CharField(blank=True, max_length=100, null=True)),
                ('sound_isolation', models.CharField(blank=True, max_length=100, null=True)),
                ('adjustable_headband', models.BooleanField(default=False)),
                ('foldable', models.BooleanField(default=False)),
                ('driver_size', models.CharField(blank=True, max_length=100, null=True)),
                ('impedance', models.CharField(blank=True, max_length=100, null=True)),
                ('frequency_response', models.CharField(blank=True, max_length=100, null=True)),
                ('comfort_features', models.TextField(blank=True, null=True)),
                ('water_resistance', models.BooleanField(default=False)),
                ('charging_case', models.BooleanField(default=False)),
                ('touch_controls', models.BooleanField(default=False)),
                ('ear_tip_sizes', models.CharField(blank=True, max_length=255, null=True)),
                ('microphone_sensitivity', models.CharField(blank=True, max_length=100, null=True)),
                ('ambient_sound_mode', models.BooleanField(default=False)),
                ('anc_levels', models.CharField(blank=True, max_length=100, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
