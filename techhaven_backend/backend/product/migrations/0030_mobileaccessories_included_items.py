# Generated by Django 5.1 on 2024-09-25 05:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0029_alter_barcodescanner_weight_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='mobileaccessories',
            name='included_items',
            field=models.TextField(blank=True, null=True),
        ),
    ]
