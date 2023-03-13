import os
import random
from datetime import timedelta

import jwt
import redis

from django.core.mail import send_mail


def get_user_access_token(payload: dict) -> dict:
    payload["exp"] = timedelta(days=7).total_seconds()
    payload["is_sales_manager"] = False
    access_token = {"token": jwt.encode(payload, os.getenv("SECRET_KEY", ""))}
    return access_token


def get_sales_manager_access_token(payload: dict) -> dict:
    payload["exp"] = timedelta(days=7).total_seconds()
    payload["is_sales_manager"] = True
    access_token = {"token": jwt.encode(payload, os.getenv("SECRET_KEY", ""))}
    return access_token


def save_temporary_password(email: str):
    password = random.randint(100000, 900000)

    with redis.Redis(host=os.getenv("REDIS_HOST", "0.0.0.0"), port=6379) as r:
        r.mset({email: password})
        r.expire(email, 1000)
        return password


def get_temporary_password(email: str):
    with redis.Redis(host=os.getenv("REDIS_HOST", "0.0.0.0"), port=6379) as r:
        password = r.get(email)
        if password:
            return password.decode("utf-8")

        return password


def send_password(email: str, password: int):
    send_mail(
        subject="код подтверждение",
        message=f"ваш код {password}",
        from_email="siteseogram@gmail.com",
        recipient_list=[
            email,
        ],
        fail_silently=False,
    )
