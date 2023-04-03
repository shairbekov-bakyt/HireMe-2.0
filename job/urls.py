from rest_framework import routers

from job.views import JobViewSet, StackViewSet

router = routers.DefaultRouter()
router.register("jobs", JobViewSet, basename="jobs")
router.register("stacks", StackViewSet, basename="stacks")

urlpatterns = router.urls
