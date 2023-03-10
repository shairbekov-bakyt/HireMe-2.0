from django.db import models


class CompanyValue(models.Model):
    value = models.CharField(max_length=255)
    company = models.ForeignKey(
        "Company", on_delete=models.CASCADE, related_name="values"
    )


class Company(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(null=True)
    occupation = models.CharField(null=True, max_length=255)
    about_company = models.CharField(max_length=255, null=True)
    email = models.EmailField(null=True)
    company_website = models.URLField()


class Stack(models.Model):
    name = models.CharField(max_length=255)


class UserWorkExperience(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    user = models.ForeignKey("User", on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    stacks = models.ManyToManyField(Stack)
    responsibilities = models.TextField(null=True)


class UserAmbitions(models.Model):
    expectation = models.TextField()
    experience_companies = models.TextField()
    stacks = models.ManyToManyField(Stack)


class User(models.Model):
    email = models.EmailField()
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
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return self.email
