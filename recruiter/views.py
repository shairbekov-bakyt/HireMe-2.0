from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from recruiter.models import Recruiter
from recruiter.serializers import (RecruiterAuthSerializer,
                                   RecruiterVerificationSerializer)
from user.serializers import TokenSerializer
from user.utils import (get_temporary_password, get_user_access_token,
                        save_temporary_password, send_password)


class RecruiterViewSet(GenericViewSet):
    queryset = Recruiter.objects.all()
    serializer_class = RecruiterAuthSerializer

    @swagger_auto_schema(
        methods=["post"],
        tags=["recruiters"],
        request_body=RecruiterAuthSerializer,
        responses={200: TokenSerializer},
    )
    @action(
        detail=False,
        methods=["post"],
        url_path="sign_in",
        serializer_class=RecruiterAuthSerializer,
    )
    def sign_in(self, request):
        try:
            user = Recruiter.objects.get(email=request.data["email"])
        except Recruiter.DoesNotExist:
            return Response({"message": "recruiter does not exists"}, status=404)

        if user.password != request.data["password"]:
            return Response({"message": "user invalid password"}, status=401)

        if not user.is_active:
            return Response(
                {"message": "before sign In please active email"}, status=401
            )

        payload = {"email": user.email, "user_id": user.pk, "is_recruiter": True}
        response = get_user_access_token(payload)
        response["user_id"] = user.pk
        return Response(response, status=200)

    @swagger_auto_schema(
        methods=["post"], tags=["recruiters"], request_body=RecruiterAuthSerializer
    )
    @action(
        detail=False,
        methods=["post"],
        url_path="sign_up",
        serializer_class=RecruiterAuthSerializer,
    )
    def sign_up(self, request):
        email = request.data["email"]
        password = request.data["password"]

        # generate temp password, send to user
        temp_password: int = save_temporary_password(email)
        send_password(email, temp_password)

        Recruiter.objects.create(email=email, password=password, is_active=False)
        return Response({"message": "active your email"}, status=200)

    @swagger_auto_schema(
        methods=["post"],
        tags=["recruiters"],
        request_body=RecruiterVerificationSerializer,
    )
    @action(detail=False, methods=["post"])
    def verify(self, request):
        request_data = request.data
        try:
            user = Recruiter.objects.get(email=request_data["email"])
        except Recruiter.DoesNotExist:
            return Response({"message": "recruiter does not exists"}, status=404)

        user_email = user.email
        temp_password = get_temporary_password(user_email)
        if temp_password != request_data["temporary_password"]:
            return Response({"message": "invalid activation code"}, status=401)

        user.is_active = True
        user.save()
        return Response({"message": "recruiter activated"}, status=200)
