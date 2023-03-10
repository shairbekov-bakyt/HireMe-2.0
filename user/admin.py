from django.contrib import admin

from user.models import (
    User,
    UserAmbitions,
    UserWorkExperience,
    Company,
    CompanyValue,
    Stack,
)


admin.site.register(User)
admin.site.register(UserAmbitions)
admin.site.register(UserWorkExperience)
admin.site.register(Company)
admin.site.register(Stack)
admin.site.register(CompanyValue)
