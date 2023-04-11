import django_filters
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from company.models import Company
from company.serializers import (CompanyCreateSerializer,
                                 CompanyDetailSerializer,
                                 CompanyListSerializer)


class CompanyListFilter(django_filters.FilterSet):
    location = django_filters.CharFilter(lookup_expr="iexect")

    class Meta:
        model = Company
        fields = ["location"]


class CompanyViewSet(GenericViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanyListSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def list(self, request):
        instances = Company.objects.all()
        serializer = CompanyListSerializer(instances, many=True)
        return Response(serializer.data, status=200)

    def retrieve(self, request, pk):
        instance = Company.objects.get(pk=pk)
        serializer = CompanyDetailSerializer(instance)
        return Response(serializer.data)

    def create(self, request):
        request_body = request.data.copy()
        company = CompanyCreateSerializer(data=request_body)
        company.is_valid(raise_exception=True)
        company_inst = company.save()
        recruiter = request.user
        recruiter.company = company_inst
        recruiter.save()
        return Response(company.data, status=201)

    def update(self, request):
        request_body = request.data.copy()
        company = CompanyCreateSerializer(data=request_body)
        company.is_valid(raise_exception=True)
        company.save()
        return Response(company.data, status=201)

    @action(detail=False, url_path="jobs", methods=["post"])
    def create_job(self, request):
        return Response({"message": "job created"}, status=201)

    @action(detail=False, url_path="jobs/<int:pk>", methods=["put", "delete"])
    def update_job(self, request, pk: int):
        return Response({"message": "job updated or deleted"}, status=201)
