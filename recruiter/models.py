from django.db import models

from company.models import Company


class Recruiter(models.Model):
    email = models.EmailField(verbose_name="email", unique=True)
    password = models.CharField(verbose_name="password", max_length=256)
    company = models.ForeignKey(
        Company, null=True, blank=True, on_delete=models.PROTECT
    )
    is_active = models.BooleanField()

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = "Recruiter"
        verbose_name_plural = "Recruiters"
