from django.db import models

from company.models import Company


class Stack(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class JobType(models.Model):
    position_type = models.CharField(max_length=255)

    def __str__(self):
        return self.position_type


class JobBenefit(models.Model):
    benefit = models.CharField(max_length=255)
    job = models.ForeignKey(
        to="Job", on_delete=models.CASCADE, related_name="job_benefits"
    )

    def __str__(self) -> str:
        return self.benefit


class Job(models.Model):
    position = models.CharField(max_length=255)
    company = models.ForeignKey(Company, on_delete=models.PROTECT, related_name="vacancies")
    from_salary = models.IntegerField(default=0)
    to_salary = models.IntegerField(blank=True, null=True)
    job_type = models.ManyToManyField(JobType, related_name="types")
    from_experience = models.IntegerField(default=0)
    to_experience = models.IntegerField(blank=True, null=True)
    job_stack = models.ManyToManyField(Stack, related_name="stacks")

    description = models.CharField(max_length=255)
    responsibility = models.CharField(max_length=255, verbose_name="responsibilities")
    expectation = models.CharField(max_length=255)
    created_date = models.DateField(auto_now_add=True)

    soft_skill = models.ManyToManyField(Stack, related_name="job")
    will_be_plus = models.ManyToManyField(Stack, related_name="will_be_plus")

    class Meta:
        verbose_name = "Job"
        verbose_name_plural = "Jobs"
