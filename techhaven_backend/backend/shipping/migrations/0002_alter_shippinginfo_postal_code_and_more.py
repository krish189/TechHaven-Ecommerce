# Generated by Django 5.1 on 2024-09-11 06:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shipping', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shippinginfo',
            name='postal_code',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='shippinginfo',
            name='street_address',
            field=models.TextField(),
        ),
    ]