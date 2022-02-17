from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from django.views.decoraors.csrf import ensure_csrf_cookie, csrf_protect
# Create your views here.

def welcome(request):
    return render(request, 'index.html')


@method_decoration(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({ 'success': 'CSRF cookie set' })