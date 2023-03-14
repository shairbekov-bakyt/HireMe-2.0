from django.db import models


class CompanyValue(models.Model):
    value = models.CharField(max_length=255)
    company = models.ForeignKey(
        "Company", on_delete=models.CASCADE, related_name="values"
    )

    def __str__(self):
        return self.value


class Company(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to="%Y/%M/%d/%h", null=True)
    occupation = models.CharField(null=True, max_length=255)
    about_company = models.TextField(null=True)
    company_website = models.URLField()
    location = models.CharField(max_length=255)
    employer = models.IntegerField()
