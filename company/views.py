from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from company.models import Company
from company.serializers import CompanyListSerializer, CompanyDetailSerializer


class CompanyViewSet(GenericViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanyListSerializer

    def list(self, request):
        instances = Company.objects.all()
        serializer = CompanyListSerializer(instances, many=True)
        return Response(serializer.data, status=200)

    def retrieve(self, request, pk):
        instance = Company.objects.get(pk=pk)
        serializer = CompanyDetailSerializer(instance)
        return Response(serializer.data)