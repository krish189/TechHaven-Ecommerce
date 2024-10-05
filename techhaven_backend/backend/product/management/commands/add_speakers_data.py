import os
import json
from django.core.management.base import BaseCommand
from ...models import Speaker

class Command(BaseCommand):
    help = 'Add speaker data to database from a json file'
    def handle(self, *args, **options):
        base_dir = os.path.dirname(os.path.abspath(__file__)) 
        json_file_path = os.path.join(base_dir, '..', '..', 'data', 'speakers_data.json')
        json_file_path = os.path.abspath(json_file_path) 
        with open(json_file_path, 'r') as file:
            speakers_data = json.load(file)
            for speaker_data in speakers_data:
                Speaker.objects.create(
                    name = speaker_data['name'],
                    description_para = speaker_data['description_para'],
                    description_points = speaker_data['description_points'],
                    price = speaker_data['price'],
                    discount_price = speaker_data['discount_price'],
                    sku = speaker_data['sku'],
                    brand = speaker_data['brand'],
                    images = speaker_data['images'],
                    stock = speaker_data['stock'],
                    rating = speaker_data['rating'],
                    num_reviews = speaker_data['num_reviews'],
                    dimensions = speaker_data['dimensions'],
                    weight = speaker_data['weight'],
                    warranty = speaker_data['warranty'],
                    color = speaker_data['color'],
                    speaker_type = speaker_data['speaker_type'],
                    power_output = speaker_data['power_output'],
                    connectivity = speaker_data['connectivity'],
                    frequency_response = speaker_data['frequency_response'],
                    waterproof = speaker_data['waterproof'],
                    microphone = speaker_data['microphone'],
                    bass_boost = speaker_data['bass_boost'],
                    led_lighting = speaker_data['led_lighting'],
                    multi_device_pairing = speaker_data['multi_device_pairing'],
                    audio_inputs = speaker_data['audio_inputs'],
                    driver_size = speaker_data['driver_size']
                )
                self.stdout.write(self.style.SUCCESS('Successfully added speaker data'))