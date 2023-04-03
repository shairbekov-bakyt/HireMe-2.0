from rest_framework.routers import DefaultRouter

from company.views import CompanyViewSet

router = DefaultRouter()
router.register("companies", CompanyViewSet)

urlpatterns = router.urls
