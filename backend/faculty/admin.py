from django.contrib import admin

# Register your models here.
from faculty.models import *
admin.site.register(Semester)
admin.site.register(Faculty)
admin.site.register(Subject)