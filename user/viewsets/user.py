from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework.decorators import action
from drf_yasg.utils import swagger_auto_schema


from user.models import User


class UserViewSet(ViewSet):
    serializer_class = ""
    queryset = User.objects.all()
    permission_classes = []

    @swagger_auto_schema(methods=["post"], tags=["users"])
    @action(detail=False, methods=["post"], url_path="sign_in")
    def sign_in(self, request):
        return Response({"user": "check"})

    @swagger_auto_schema(methods=["post"], tags=["users"])
    @action(detail=False, methods=["post"], url_path="sign_up")
    def sign_up(self, request):
        return Response({"user": "check"})

    @swagger_auto_schema(methods=["post"], tags=["users"])
    @action(detail=False, methods=["post"])
    def verify(self, request):
        return Response({"user": "verify"})

    @swagger_auto_schema(methods=["put"], tags=["users"])
    @action(detail=False, methods=["put"], url_path="profile")
    def profile_update(self, request):
        return Response({"user": "verify"})

    @swagger_auto_schema(methods=["get"], tags=["users"])
    @action(detail=False, methods=["get"], url_path="profile/<int:id>")
    def profile_read(self, request):
        return Response({"user": "verify"})

    def list(self, request):
        return Response({"user": "list"})
