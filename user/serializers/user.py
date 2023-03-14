from rest_framework import serializers

from user.models.user import UserAmbition, UserWorkExperience


class UserSignInSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()


class UserSignUpSerializer(UserSignInSerializer):
    pass


class TokenSerializer(serializers.Serializer):
    token = serializers.CharField()


class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    full_name = serializers.CharField()
    location = serializers.CharField()
    photo = serializers.ImageField()
    position = serializers.CharField()
    work_expectations = serializers.StringRelatedField(many=True)
    salary_expectation = serializers.IntegerField()
    experience_year = serializers.IntegerField()
    photo = serializers.ImageField()
    user_ambitions = serializers.SlugRelatedField(
        slug_field="about_myself", read_only=True
    )


class UserAmbitions(serializers.Serializer):
    about_myself = serializers.CharField()
    achievement = serializers.CharField()
    expectation = serializers.CharField()


class UserCompanySerializer(serializers.Serializer):
    name = serializers.CharField()
    image = serializers.ImageField()
    occupation = serializers.CharField()


class UserWorkExperienceSerializer(serializers.Serializer):
    company = UserCompanySerializer()
    start_date = serializers.DateField()
    end_date = serializers.DateField()
    responsibilities = serializers.CharField()
    stacks = serializers.StringRelatedField(many=True)


class UserExperienceUpdate(serializers.Serializer):
    company = serializers.CharField()
    start_date = serializers.DateField()
    end_date = serializers.DateField()
    responsibilities = serializers.CharField()
    stacks = serializers.ListField(child=serializers.IntegerField())


class UserWorkExperienceUpdateSerializer(serializers.ListSerializer):
    child = UserExperienceUpdate()


class UserDetailSerializer(serializers.Serializer):
    location = serializers.CharField()
    full_name = serializers.CharField()
    position = serializers.CharField()
    user_ambition = UserAmbitions()
    stacks = serializers.StringRelatedField(many=True)
    linkedIn = serializers.URLField()
    telegram = serializers.URLField()
    github = serializers.URLField()
    phone_number = serializers.CharField()
    email = serializers.EmailField()
    work_expectations = serializers.StringRelatedField(many=True)
    salary_expectation = serializers.IntegerField()
    worked_companies = UserWorkExperienceSerializer(many=True)
    photo = serializers.ImageField()
    experience_year = serializers.IntegerField()


class StackUpdateSerializer(serializers.Serializer):
    id = serializers.IntegerField()


class UserUpdateSerializer(serializers.Serializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    phone_number = serializers.CharField()
    salary_expectation = serializers.IntegerField()
    linkedIn = serializers.URLField()
    telegram = serializers.URLField()
    github = serializers.URLField()


class UserAmbitionUpdateSerializer(serializers.Serializer):
    about_myself = serializers.CharField()
    achievement = serializers.CharField()
    expectation = serializers.CharField()
    stacks = serializers.ListField(child=serializers.IntegerField())


class UserVerificationSerilizer(serializers.Serializer):
    email = serializers.EmailField()
    temporary_password = serializers.CharField()
