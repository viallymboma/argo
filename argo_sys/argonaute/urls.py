from rest_framework import routers
from .api import SailorsSet

router = routers.DefaultRouter()

router.register('api/matello', SailorsSet, 'sailors')

urlpatterns = router.urls