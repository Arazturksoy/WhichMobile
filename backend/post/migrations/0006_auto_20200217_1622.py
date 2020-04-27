# Generated by Django 3.0.2 on 2020-02-17 13:22

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0005_auto_20200210_1725'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='title',
            new_name='brand',
        ),
        migrations.RemoveField(
            model_name='post',
            name='screen',
        ),
        migrations.RemoveField(
            model_name='post',
            name='usability',
        ),
        migrations.AddField(
            model_name='post',
            name='model',
            field=models.CharField(default=django.utils.timezone.now, max_length=150),
            preserve_default=False,
        ),
    ]
