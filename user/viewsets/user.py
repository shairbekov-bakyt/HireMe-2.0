from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from drf_yasg.utils import swagger_auto_schema


from user.models import User, UserAmbition, Stack
from user.models.user import Company, UserWorkExperience
from user.serializers.user import (
    UserVerificationSerilizer,
    UserWorkExperienceUpdateSerializer,
)
from user.utils import (
    get_user_access_token,
    save_temporary_password,
    send_password,
    get_temporary_password,
)
from user.serializers import (
    UserSignInSerializer,
    UserSignUpSerializer,
    UserSerializer,
    UserDetailSerializer,
    TokenSerializer,
    UserUpdateSerializer,
    UserAmbitionUpdateSerializer,
)


class UserViewSet(GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @swagger_auto_schema(
        methods=["post"],
        tags=["users"],
        request_body=UserSignInSerializer,
        responses={200: TokenSerializer},
    )
    @action(
        detail=False,
        methods=["post"],
        url_path="sign_in",
        serializer_class=UserSignInSerializer,
    )
    def sign_in(self, request):
        try:
            user = User.objects.get(email=request.data["email"])
        except User.DoesNotExist:
            return Response({"message": "user does not exists"}, status=404)

        if user.password != request.data["password"]:
            return Response({"message": "user invalid password"}, status=401)

        if not user.is_active:
            return Response(
                {"message": "before sign In please active email"}, status=401
            )

        payload = {
            "email": user.email,
            "user_id": user.pk,
        }
        response = get_user_access_token(payload)
        response["user_id"] = user.pk
        return Response(response, status=200)

    @swagger_auto_schema(
        methods=["post"], tags=["users"], request_body=UserSignUpSerializer
    )
    @action(
        detail=False,
        methods=["post"],
        url_path="sign_up",
        serializer_class=UserSignUpSerializer,
    )
    def sign_up(self, request):
        email = request.data["email"]
        password = request.data["password"]

        # generate temp password, send to user
        temp_password: int = save_temporary_password(email)
        send_password(email, temp_password)

        User.objects.create(email=email, password=password, is_active=False)
        return Response({"message": "active your email"}, status=200)

    @swagger_auto_schema(
        methods=["post"], tags=["users"], request_body=UserVerificationSerilizer
    )
    @action(detail=False, methods=["post"])
    def verify(self, request):
        request_data = request.data
        try:
            user = User.objects.get(email=request_data["email"])
        except User.DoesNotExist:
            return Response({"message": "user does not exists"}, status=404)

        user_email = user.email
        temp_password = get_temporary_password(user_email)
        if temp_password != request_data["temporary_password"]:
            return Response({"message": "invalid activation code"}, status=401)

        user.is_active = True
        user.save()
        return Response({"message": "user activated"}, status=200)

    @swagger_auto_schema(
        methods=["put"], tags=["users"], request_body=UserUpdateSerializer
    )
    @action(
        detail=False,
        methods=["put"],
        url_path="general",
        permission_classes=[IsAuthenticated],
    )
    def user_update(self, request):
        serializer = UserUpdateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        User.objects.filter(pk=request.user.pk).update(**serializer.data)
        return Response({"message": "user updated successfully"})

    @swagger_auto_schema(
        methods=["put"], tags=["users"], request_body=UserAmbitionUpdateSerializer
    )
    @action(
        detail=False,
        methods=["put"],
        url_path="ambition",
        permission_classes=[IsAuthenticated],
    )
    def user_ambition_update(self, request):
        serializer = UserAmbitionUpdateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer = serializer.data
        stacks = serializer.pop("stacks")
        ambition = serializer
        user = request.user
        user.stacks.set(Stack.objects.filter(pk__in=stacks))
        user_ambition, created = UserAmbition.objects.get_or_create(
            user=user, **ambition
        )
        return Response({"message": "user updated successfully"})

    @swagger_auto_schema(
        methods=["put"], tags=["users"], request_body=UserWorkExperienceUpdateSerializer
    )
    @action(
        detail=False,
        methods=["put"],
        url_path="experience",
        permission_classes=[IsAuthenticated],
    )
    def user_experience_update(self, request):
        serializer = UserWorkExperienceUpdateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer = serializer.data
        user = User.objects.get(pk=1)
        for work in serializer:
            company_name = work.pop("company")
            stacks = work.pop("stacks")
            created_company, created = Company.objects.get_or_create(name=company_name)
            experience, created = UserWorkExperience.objects.get_or_create(
                user=user, company=created_company, **work
            )
            experience.stacks.set(Stack.objects.filter(pk__in=stacks))
            experience.save()

        return Response({"message": "user updated successfully"})

    def retrieve(self, request, pk):
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return Response({"message": "user does not exists"}, status=404)

        serializer = UserDetailSerializer(user)
        return Response(serializer.data, status=200)

    def list(self, request):
        serializer = self.get_serializer(self.queryset, many=True)
        return Response(serializer.data, status=200)
