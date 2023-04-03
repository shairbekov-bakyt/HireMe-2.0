import django_filters

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from job.models import Job, JobType, Stack
from job.serializers import JobList, JobDetail, StackSerializer


class JobFilter(django_filters.FilterSet):
    job_stack = django_filters.ModelMultipleChoiceFilter(
        field_name="job_stack", queryset=Stack.objects.all()
    )
    job_type = django_filters.ModelMultipleChoiceFilter(
        field_name="job_type", queryset=JobType.objects.all()
    )
    from_salary = django_filters.NumberFilter(lookup_expr="gt")
    from_experience = django_filters.NumberFilter(lookup_expr="gt")

    class Meta:
        model = Job
        fields = ["job_stack", "from_salary", "job_type"]


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


class StackViewSet(viewsets.ModelViewSet):
    queryset = Stack.objects.all()
    serializer_class = StackSerializer
    http_method_names = ["get"]
