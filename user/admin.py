from django.contrib import admin

from user.models import (
    User,
    UserAmbition,
    UserWorkExperience,
    Company,
    CompanyValue,
    Stack,
    WorkExpectation,
)


admin.site.register(User)
admin.site.register(UserAmbition)
admin.site.register(UserWorkExperience)
admin.site.register(Company)
admin.site.register(Stack)
admin.site.register(CompanyValue)
admin.site.register(WorkExpectation)
