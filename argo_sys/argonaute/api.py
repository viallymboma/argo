from rest_framework.decorators import permission_classes
# from django.shortcuts import render
from .models import Sailors
from rest_framework import viewsets, permissions
from .serializers import SailorsSerializer
from django_filters.rest_framework import DjangoFilterBackend
# import django_filters.rest_framework
# import django_filters.rest_framework
from rest_framework import filters


class SailorsSet(viewsets.ModelViewSet):
    queryset = Sailors.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SailorsSerializer

    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    search_fields = ['id', 'firstName', 'origin', 'language', 'skill', 'maritalStatus', 'dateOfFirstSail', 'weight', 'height']
    # Examples: http://example.com/api/meals?search=Jollof (search any things that is included in any of the fields mentionned above)

    filterset_fields = ['id', 'firstName', 'origin', 'language', 'skill', 'maritalStatus', 'dateOfFirstSail', 'weight', 'height']
    # Examples: http://example.com/api/meals?meal_type=Rice&meal_variation=Jollof 

    ordering_fields = ['id', 'timestamp', 'updated', 'dateOfFirstSail', 'weight', 'height']
    ordering = ['price']