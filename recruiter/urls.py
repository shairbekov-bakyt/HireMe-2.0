from rest_framework.routers import DefaultRouter

from recruiter.views import RecruiterViewSet

router = DefaultRouter()

router.register("recruiters", RecruiterViewSet, basename="recruiters")

urlpatterns = router.urls
