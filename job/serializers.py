from rest_framework import serializers

from job.models import Job, JobBenefit, JobStack, JobType
from user.models import Company  # type: ignore


class CompanyList(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ["name", "image", "location"]


class JobStackSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobStack
        fields = ["stack"]


class JobTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobType
        fields = ["position_type"]


class JobBenefitSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobBenefit
        fields = ["benefit"]


class JobList(serializers.ModelSerializer):
    company = CompanyList()
    job_stack = serializers.StringRelatedField(many=True)
    job_type = serializers.StringRelatedField(many=True)

    class Meta:
        model = Job
        fields = [
            "id",
            "position",
            "company",
            "from_salary",
            "to_salary",
            "description",
            "job_stack",
            "job_type",
            "from_experience",
            "to_experience",
            "created_date",
        ]


class JobDetail(serializers.ModelSerializer):
    company = CompanyList()
    job_benefits = serializers.StringRelatedField(many=True)
    job_stack = serializers.StringRelatedField(many=True)
    job_type = serializers.StringRelatedField(many=True)

    class Meta:
        model = Job
        fields = [
            "id",
            "company",
            "job_stack",
            "job_type",
            "position",
            "description",
            "from_salary",
            "to_salary",
            "from_experience",
            "to_experience",
            "created_date",
            "responsibility",
            "expectation",
            "job_benefits",
        ]
