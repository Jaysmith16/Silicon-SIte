from django.urls import path
from faculty.views import *
from faculty.faculties import *
from faculty.subjects import *
init_and_validate()

urlpatterns = [
    path('subject/', SubjectView.as_view(), name='crud_subject'),
    path('faculty/', FacultyView.as_view(), name='crud_faculty'),
   
]
