# Generated by Django 4.1.7 on 2023-03-13 06:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("user", "0008_alter_user_email"),
    ]

    operations = [
        migrations.CreateModel(
            name="Job",
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
                ("position", models.TextField()),
                ("from_salary", models.IntegerField(default=0)),
                ("to_salary", models.IntegerField(blank=True, null=True)),
                ("from_experience", models.IntegerField(default=0)),
                ("to_experience", models.IntegerField(blank=True, null=True)),
                ("description", models.TextField()),
                ("responsibility", models.TextField(verbose_name="responsibilities")),
                ("expectation", models.TextField()),
                ("created_date", models.DateField(auto_now_add=True)),
                (
                    "company",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT, to="user.company"
                    ),
                ),
            ],
            options={
                "verbose_name": "Job",
                "verbose_name_plural": "Jobs",
            },
        ),
        migrations.CreateModel(
            name="JobStack",
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
                ("stack", models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name="JobType",
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
                ("position_type", models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name="JobBenefit",
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
                ("benefit", models.TextField()),
                (
                    "job",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="job_benefits",
                        to="job.job",
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="job",
            name="job_stack",
            field=models.ManyToManyField(related_name="stacks", to="job.jobstack"),
        ),
        migrations.AddField(
            model_name="job",
            name="job_type",
            field=models.ManyToManyField(related_name="types", to="job.jobtype"),
        ),
    ]