# Generated by Django 4.1.7 on 2023-03-14 12:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("company", "0001_initial"),
        ("job", "0001_initial"),
    ]

    operations = [
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
                ("location", models.CharField(max_length=255)),
                ("photo", models.ImageField(upload_to="%Y/%M/%d/$H/")),
                ("email", models.EmailField(max_length=254, unique=True)),
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
                ("is_active", models.BooleanField()),
                ("stacks", models.ManyToManyField(to="job.stack")),
            ],
        ),
        migrations.CreateModel(
            name="WorkExpectation",
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
                ("work_type", models.CharField(max_length=255)),
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
                        on_delete=django.db.models.deletion.CASCADE,
                        to="company.company",
                    ),
                ),
                ("stacks", models.ManyToManyField(to="job.stack")),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="worked_companies",
                        to="user.user",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="UserAmbition",
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
                ("achievement", models.TextField()),
                ("expectation", models.TextField()),
                ("about_myself", models.TextField()),
                (
                    "user",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="user_ambition",
                        to="user.user",
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="user",
            name="work_expectations",
            field=models.ManyToManyField(to="user.workexpectation"),
        ),
    ]
