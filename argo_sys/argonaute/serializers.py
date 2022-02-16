from django.db import models
from django.db.models import fields
from rest_framework import serializers

from .models import Sailors

class SailorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sailors
        fields = '__all__'
