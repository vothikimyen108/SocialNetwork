# Generated by Django 3.2.5 on 2021-12-06 08:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('charityapp', '0005_auction_money_auctioned'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='birthday',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='gender',
            field=models.BooleanField(default=True),
        ),
    ]
