# Generated by Django 4.1.7 on 2023-03-10 11:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Company",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("image", models.ImageField(null=True, upload_to="")),
                ("occupation", models.CharField(max_length=255, null=True)),
                ("about_company", models.CharField(max_length=255, null=True)),
                ("email", models.EmailField(max_length=254, null=True)),
                ("company_website", models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name="Stack",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("email", models.EmailField(max_length=254)),
                ("password", models.CharField(max_length=255)),
                ("first_name", models.CharField(max_length=255, null=True)),
                ("last_name", models.CharField(max_length=255, null=True)),
                ("position", models.CharField(max_length=255, null=True)),
                ("phone_number", models.CharField(max_length=255, null=True)),
                ("salary_expectation", models.IntegerField(null=True)),
                ("experience_year", models.IntegerField(null=True)),
                ("linkedIn", models.URLField(null=True)),
                ("telegram", models.URLField(null=True)),
                ("github", models.URLField(null=True)),
                ("is_active", models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name="UserWorkExperience",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("start_date", models.DateField()),
                ("end_date", models.DateField()),
                ("responsibilities", models.TextField(null=True)),
                (
                    "company",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="user.company"
                    ),
                ),
                ("stacks", models.ManyToManyField(null=True, to="user.stack")),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="user.user"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="UserAmbitions",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("expectation", models.CharField(max_length=255, null=True)),
                ("experience_companies", models.TextField()),
                ("stacks", models.ManyToManyField(null=True, to="user.stack")),
            ],
        ),
        migrations.CreateModel(
            name="CompanyValue",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("value", models.CharField(max_length=255)),
                (
                    "company",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="values",
                        to="user.company",
                    ),
                ),
            ],
        ),
    ]