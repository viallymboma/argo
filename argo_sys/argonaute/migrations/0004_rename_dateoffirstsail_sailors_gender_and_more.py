# Generated by Django 4.0.2 on 2022-02-15 23:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('argonaute', '0003_rename_price_sailors_salary'),
    ]

    operations = [
        migrations.RenameField(
            model_name='sailors',
            old_name='dateOfFirstSail',
            new_name='gender',
        ),
        migrations.AddField(
            model_name='sailors',
            name='experience',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
