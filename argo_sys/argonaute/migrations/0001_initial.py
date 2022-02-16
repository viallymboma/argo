# Generated by Django 4.0.2 on 2022-02-15 11:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sailors',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(blank=True, max_length=500, null=True)),
                ('lastName', models.CharField(blank=True, max_length=500, null=True)),
                ('dateOfBirth', models.CharField(blank=True, max_length=500, null=True)),
                ('height', models.CharField(blank=True, max_length=500, null=True)),
                ('weight', models.CharField(blank=True, max_length=500, null=True)),
                ('origin', models.CharField(blank=True, max_length=500, null=True)),
                ('language', models.CharField(blank=True, max_length=500, null=True)),
                ('skill', models.CharField(blank=True, max_length=500, null=True)),
                ('dateOfFirstSail', models.CharField(blank=True, max_length=500, null=True)),
                ('maritalStatus', models.CharField(blank=True, max_length=500, null=True)),
                ('description', models.CharField(blank=True, max_length=500, null=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('price', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]
