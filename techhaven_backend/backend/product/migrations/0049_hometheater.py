# Generated by Django 5.1 on 2024-09-28 11:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0048_remove_keyboardmousecombo_anti_ghosting'),
    ]

    operations = [
        migrations.CreateModel(
            name='HomeTheater',
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
                ('weight', models.DecimalField(blank=True, decimal_places=4, max_digits=6, null=True)),
                ('warranty', models.CharField(blank=True, max_length=255, null=True)),
                ('color', models.CharField(blank=True, max_length=100, null=True)),
                ('audio_output_power', models.CharField(blank=True, max_length=100, null=True)),
                ('speaker_configuration', models.CharField(blank=True, max_length=255, null=True)),
                ('supported_audio_formats', models.CharField(blank=True, max_length=255, null=True)),
                ('connectivity', models.CharField(blank=True, max_length=255, null=True)),
                ('number_of_hdmi_ports', models.IntegerField(blank=True, null=True)),
                ('wireless_subwoofer', models.BooleanField(default=False)),
                ('streaming_services', models.CharField(blank=True, max_length=255, null=True)),
                ('surround_sound', models.BooleanField(default=True)),
                ('smart_features', models.CharField(blank=True, max_length=255, null=True)),
                ('remote_control', models.BooleanField(default=True)),
                ('frequency_response', models.CharField(blank=True, max_length=100, null=True)),
                ('power_consumption', models.CharField(blank=True, max_length=100, null=True)),
                ('signal_to_noise_ratio', models.CharField(blank=True, max_length=100, null=True)),
                ('multi_room_support', models.BooleanField(default=False)),
                ('ethernet_port', models.BooleanField(default=False)),
                ('usb_ports', models.IntegerField(blank=True, null=True)),
                ('bluetooth_version', models.CharField(blank=True, max_length=50, null=True)),
                ('voice_assistant_integration', models.BooleanField(default=False)),
                ('mounting_options', models.CharField(blank=True, max_length=255, null=True)),
                ('battery_backup', models.CharField(blank=True, max_length=50, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]