from django.contrib import admin

from recruiter.models import Recruiter


@admin.register(Recruiter)
class RecruiterAdmin(admin.ModelAdmin):
    list_display = ("id", "email", "company_name")
    list_filter = ("company__name",)

    def company_name(self, obj):
        return obj.company.name
