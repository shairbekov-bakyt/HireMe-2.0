from django.db import models


class CompanyValue(models.Model):
    value = models.CharField(max_length=255)
    company = models.ForeignKey(
        "Company", on_delete=models.CASCADE, related_name="values"
    )

    def __str__(self):
        return self.value

    class Meta:
        verbose_name = "Company Value"
        verbose_name_plural = "Company Values"


class CompanyType(models.Model):
    company_type = models.CharField(max_length=255)

    def __str__(self):
        return self.company_type

    class Meta:
        verbose_name = "Company Type"
        verbose_name_plural = "Company Types"


class Company(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to="%Y/%M/%d/%h", null=True)
    occupation = models.CharField(null=True, max_length=255)
    about_company = models.TextField(null=True)
    company_website = models.URLField()
    location = models.CharField(max_length=255)
    # company_type = models.ManyToManyField(CompanyType)
    employers_number = models.IntegerField()

    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"
