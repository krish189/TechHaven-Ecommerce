import os
import json
from django.core.management.base import BaseCommand
from ...models import Laptop

class Command(BaseCommand):
    help = 'Add laptop data to database from a json file'
    def handle(self, *args, **options):
        base_dir = os.path.dirname(os.path.abspath(__file__)) 
        json_file_path = os.path.join(base_dir, '..', '..', 'data', 'laptops_data.json')
        json_file_path = os.path.abspath(json_file_path) 
        with open(json_file_path, 'r') as file:
            laptops_data = json.load(file)
            for laptop_data in laptops_data:
                Laptop.objects.create(
                    name = laptop_data['name'],
                    description = laptop_data['description'],
                    price = laptop_data['price'],
                    discount_price = laptop_data['discount_price'],
                    sku = laptop_data['sku'],
                    brand = laptop_data['brand'],
                    images = laptop_data['images'],
                    stock = laptop_data['stock'],
                    rating = laptop_data['rating'],
                    num_reviews = laptop_data['num_reviews'],
                    dimensions = laptop_data['dimensions'],
                    weight = laptop_data['weight'],
                    warranty = laptop_data['warranty'],
                    color = laptop_data['color'],
                    laptop_type = laptop_data['laptop_type'],
                    cpu = laptop_data['cpu'],
                    ram = laptop_data['ram'],
                    storage = laptop_data['storage'],
                    display = laptop_data['display'],
                    graphics = laptop_data['graphics'],
                    operating_system = laptop_data['operating_system'],
                    battery_life = laptop_data['battery_life'],
                    touchscreen = laptop_data['touchscreen']
                )
                self.stdout.write(self.style.SUCCESS('Successfully added laptop data'))