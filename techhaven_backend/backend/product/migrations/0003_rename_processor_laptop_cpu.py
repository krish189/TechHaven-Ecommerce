# Generated by Django 5.1 on 2024-08-25 12:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_rename_type_laptop_laptop_type_alter_laptop_images'),
    ]

    operations = [
        migrations.RenameField(
            model_name='laptop',
            old_name='processor',
            new_name='cpu',
        ),
    ]