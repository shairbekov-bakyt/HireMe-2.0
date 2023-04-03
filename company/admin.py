from django.contrib import admin
from company.models import Company, CompanyValue, CompanyType

admin.site.register(Company)
admin.site.register(CompanyValue)
admin.site.register(CompanyType)
