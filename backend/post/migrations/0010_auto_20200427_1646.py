# Generated by Django 3.0.5 on 2020-04-27 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0009_auto_20200427_1638'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='brand',
            field=models.TextField(max_length=100),
        ),
    ]
