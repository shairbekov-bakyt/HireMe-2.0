from django.db import models

from company.models import Company
from job.models import Stack


class WorkExpectation(models.Model):
    work_type = models.CharField(max_length=255)

    def __str__(self):
        return self.work_type


class UserWorkExperience(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    user = models.ForeignKey(
        "User", on_delete=models.CASCADE, related_name="worked_companies"
    )
    start_date = models.DateField()
    end_date = models.DateField()
    stacks = models.ManyToManyField(Stack)
    responsibilities = models.TextField(null=True)


class UserAmbition(models.Model):
    user = models.OneToOneField(
        "user", on_delete=models.CASCADE, related_name="user_ambition"
    )
    achievement = models.TextField()
    expectation = models.TextField()
    about_myself = models.TextField()


class User(models.Model):
    location = models.CharField(max_length=255)
    photo = models.ImageField(upload_to="%Y/%M/%d/$H/")
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255, null=True)
    last_name = models.CharField(max_length=255, null=True)
    position = models.CharField(max_length=255, null=True)
    phone_number = models.CharField(max_length=255, null=True)
    salary_expectation = models.IntegerField(null=True)
    experience_year = models.IntegerField(null=True)
    linkedIn = models.URLField(null=True)
    telegram = models.URLField(null=True)
    github = models.URLField(null=True)
    is_active = models.BooleanField()
    stacks = models.ManyToManyField(Stack)
    work_expectations = models.ManyToManyField(WorkExpectation)
    is_sales = models.BooleanField(default=False)

    def __str__(self):
        return self.email

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"
