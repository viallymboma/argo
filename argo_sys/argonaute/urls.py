from rest_framework import routers
from .api import SailorsSet
from django.urls import path
# from 

router = routers.DefaultRouter()

router.register('api/matello', SailorsSet, 'sailors')

urlpatterns = router.urls

# urlpatterns = [
#     router.urls
#     # path('csrf_cookie', GetCSRFToken.as_view())
# ]