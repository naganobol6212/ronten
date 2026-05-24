from rest_framework.routers import DefaultRouter

from .views import SummaryViewSet

router = DefaultRouter()
router.register(r"summaries", SummaryViewSet, basename="summary")

urlpatterns = router.urls
