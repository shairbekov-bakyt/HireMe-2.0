from rest_framework import serializers

from job.models import Job


class CompanyJobSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    position = serializers.CharField()
    description = serializers.CharField()
    from_experience = serializers.IntegerField()
    from_salary = serializers.IntegerField()
    job_stack = serializers.StringRelatedField(many=True)
    job_type = serializers.StringRelatedField(many=True)


class CompanyListSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    location = serializers.CharField()
    image = serializers.ImageField()
    about_company = serializers.CharField()
    employers_number = serializers.IntegerField()

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation["vacancies"] = Job.objects.filter(company=instance).count()
        return representation


class CompanyDetailSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    location = serializers.CharField()
    image = serializers.ImageField()
    about_company = serializers.CharField()
    employers_number = serializers.IntegerField()
    occupation = serializers.CharField()
    values = serializers.StringRelatedField(many=True)
    company_website = serializers.URLField()
    vacancies = CompanyJobSerializer(many=True)
