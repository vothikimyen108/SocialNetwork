# Generated by Django 3.2.5 on 2021-12-27 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charityapp', '0009_auto_20211225_2235'),
    ]

    operations = [
        migrations.AddField(
            model_name='report',
            name='active',
            field=models.BooleanField(default=True),
        ),
    ]
