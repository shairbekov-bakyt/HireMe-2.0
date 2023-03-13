from django.contrib import admin

from .models import Job, JobStack, JobType, JobBenefit

admin.site.register(Job)
admin.site.register(JobStack)
admin.site.register(JobBenefit)
admin.site.register(JobType)
