import os

import jwt
from rest_framework import exceptions
from rest_framework.authentication import (BaseAuthentication,
                                           get_authorization_header)
from rest_framework.response import Response

from recruiter.models import Recruiter
from user.models import User


def get_user(payload: dict, email: str, *args, **kwargs):
    try:
        is_recruiter = payload["is_recruiter"]
    except KeyError:
        is_recruiter = False

    if is_recruiter:
        return Recruiter.objects.get(email=email)

    return User.objects.get(email=email)


class TokenAuthentication(BaseAuthentication):
    model = None

    def get_model(self):
        return User

    def authenticate(self, request):
        auth = get_authorization_header(request).split()
        if not auth or auth[0].lower() != b"token":
            return None

        if len(auth) == 1:
            msg = "Invalid token header. No credentials provided."
            raise exceptions.AuthenticationFailed(msg)
        elif len(auth) > 2:
            msg = "Invalid token header"
            raise exceptions.AuthenticationFailed(msg)

        try:
            token = auth[1]
            if token == "null":
                msg = "Null token not allowed"
                raise exceptions.AuthenticationFailed(msg)
        except UnicodeError:
            msg = "Invalid token header. Token string should not contain invalid characters."
            raise exceptions.AuthenticationFailed(msg)
        return self.authenticate_credentials(token)

    def authenticate_credentials(self, token):
        payload = jwt.decode(token, os.getenv("SECRET_KEY", ""), algorithms=["HS256"])
        email = payload["email"]
        try:
            user = get_user(payload, email)
        except (
            jwt.ExpiredSignatureError
            or jwt.DecodeError
            or jwt.InvalidTokenError
            or jwt.InvalidSignatureError
        ):
            return Response({"Error": "Token is invalid"}, status="403")

        except User.DoesNotExist or Recruiter.DoesNotExist:
            return Response({"Error": "Internal server error"}, status="500")

        user.is_authenticated = True
        return (user, token)

    def authenticate_header(self, request):
        return "Token"
