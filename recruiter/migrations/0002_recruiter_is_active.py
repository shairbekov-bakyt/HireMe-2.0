# Generated by Django 4.1.7 on 2023-04-11 19:05

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("recruiter", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="recruiter",
            name="is_active",
            field=models.BooleanField(default=False),
            preserve_default=False,
        ),
    ]