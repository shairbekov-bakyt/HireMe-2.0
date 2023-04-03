from django.contrib import admin

from .models import Job, Stack, JobType, JobBenefit

admin.site.register(Job)
admin.site.register(Stack)
admin.site.register(JobBenefit)
admin.site.register(JobType)
