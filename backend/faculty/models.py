from django.db import models
import uuid
from faculty.utils import *
from account.models import AbstractBaseModel, User

class Semester(models.Model):
    name = models.CharField(max_length=20)
    number = models.PositiveIntegerField(blank=True, null=True)
    
    def __str__(self) -> str:
        return str(self.id) + " - " +  str(self.name) +  " - " +   str(self.number)


class Subject(AbstractBaseModel):
    semester = models.ForeignKey(Semester, related_name='semester', on_delete=models.CASCADE, null=True, blank=True)
    added_by = models.ForeignKey(User, related_name='subject_adding_user', on_delete=models.CASCADE, null=True, blank=True )
    name = models.CharField(max_length=20)
    description = models.TextField( blank=True, null=True)
    
    class Meta:
        db_table = 'Subject_data'

    def __str__(self) -> str:
        return str(self.id) + " - " +  str(self.name) 


class Faculty(AbstractBaseModel):
    semester = models.ForeignKey(Semester, related_name='semester_teaching', on_delete=models.CASCADE, null=True, blank=True)
    subject_assigned = models.ForeignKey(Subject, related_name='subject_assigned', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    department = models.CharField(max_length=50, choices=FACULTY_DEPARTMENT_CHOICES, default= "CSE") 

    def __str__(self) -> str:
        return str(self.id) + " - " +  str(self.name) + " - " +  str(self.department)    


