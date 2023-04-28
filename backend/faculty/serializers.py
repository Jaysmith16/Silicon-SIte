
from rest_framework import serializers
from faculty.models import *


class FacultySerializers(serializers.ModelSerializer):
    subject_assigned = serializers.CharField(source='subject_assigned.name')
    class Meta:
        model = Faculty
        fields = '__all__'
        

class SubjectSerializers(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'
        

class SemesterSerializers(serializers.ModelSerializer):
    class Meta:
        model = Semester
        fields = '__all__'
        
        