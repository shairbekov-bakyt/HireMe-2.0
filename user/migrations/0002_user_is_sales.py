# Generated by Django 4.1.7 on 2023-03-15 12:47

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("user", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="is_sales",
            field=models.BooleanField(default=False),
        ),
    ]
