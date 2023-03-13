from rest_framework import routers

from job.views import JobViewSet

router = routers.DefaultRouter()
router.register("jobs", JobViewSet, basename="jobs")

urlpatterns = router.urls
