# Generated by Django 3.0.5 on 2020-04-27 13:32

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0007_auto_20200227_1213'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='battery',
        ),
        migrations.RemoveField(
            model_name='post',
            name='camera',
        ),
        migrations.RemoveField(
            model_name='post',
            name='design',
        ),
        migrations.AddField(
            model_name='post',
            name='score',
            field=models.CharField(default=django.utils.timezone.now, max_length=10),
            preserve_default=False,
        ),
    ]