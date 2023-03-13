from django.db import models

from user.models import Company


class JobType(models.Model):
    position_type = models.TextField()

    def __str__(self):
        return self.position_type


class JobStack(models.Model):
    stack = models.TextField()

    def __str__(self):
        return self.stack


class JobBenefit(models.Model):
    benefit = models.TextField()
    job = models.ForeignKey(
        to="Job", on_delete=models.CASCADE, related_name="job_benefits"
    )

    def __str__(self) -> str:
        return self.benefit


class Job(models.Model):
    position = models.TextField()
    company = models.ForeignKey(Company, on_delete=models.PROTECT)
    from_salary = models.IntegerField(default=0)
    to_salary = models.IntegerField(blank=True, null=True)
    job_type = models.ManyToManyField(JobType, related_name="types")
    from_experience = models.IntegerField(default=0)
    to_experience = models.IntegerField(blank=True, null=True)
    job_stack = models.ManyToManyField(JobStack, related_name="stacks")

    description = models.TextField()
    responsibility = models.TextField(verbose_name="responsibilities")
    expectation = models.TextField()
    created_date = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name = "Job"
        verbose_name_plural = "Jobs"
