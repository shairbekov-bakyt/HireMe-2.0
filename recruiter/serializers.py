from rest_framework import serializers

from recruiter.models import Recruiter


class RecruiterAuthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruiter
        exclude = ("company", "is_active")


class RecruiterVerificationSerializer(serializers.Serializer):
    email = serializers.EmailField()
    temporary_password = serializers.CharField()
