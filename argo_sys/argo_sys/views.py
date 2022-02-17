from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.middleware.csrf import get_token

# Create your views here.

def welcome(request):
    return render(request, 'index.html')

def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})
