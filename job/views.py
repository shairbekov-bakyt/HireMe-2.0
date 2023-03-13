from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import filters
import django_filters
from django_filters.rest_framework import DjangoFilterBackend
from job.models import Job, JobStack
from job.serializers import JobList, JobDetail


class JobFilter(django_filters.FilterSet):
    job_stack = django_filters.ModelMultipleChoiceFilter(
        field_name="job_stack", queryset=JobStack.objects.all()
    )

    class Meta:
        model = Job
        fields = ["job_stack"]


class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.order_by("-created_date")
    serializer_class = JobList
    http_method_names = ["get"]
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    filterset_class = JobFilter
    search_fields = ["position"]

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = JobDetail(instance)
        return Response(serializer.data)
