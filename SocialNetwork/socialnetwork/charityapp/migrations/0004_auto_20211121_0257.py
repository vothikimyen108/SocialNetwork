# Generated by Django 3.2.5 on 2021-11-20 19:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('charityapp', '0003_product_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='auction',
            name='finish_date',
        ),
        migrations.RemoveField(
            model_name='auction',
            name='start_date',
        ),
    ]