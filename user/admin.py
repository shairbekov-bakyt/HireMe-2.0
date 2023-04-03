from django.contrib import admin

from user.models import (
    User,
    UserAmbition,
    UserWorkExperience,
    WorkExpectation,
)


admin.site.register(User)
admin.site.register(UserAmbition)
admin.site.register(UserWorkExperience)
admin.site.register(WorkExpectation)
