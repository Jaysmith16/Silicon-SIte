
from rest_framework import serializers
from faculty.models import *


class FacultySerializers(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'
        

class SubjectSerializers(serializers.ModelSerializer):
    # semester = serializers.CharField(source='semester.number')

    class Meta:
        model = Subject
        fields = '__all__'
        

class SemesterSerializers(serializers.ModelSerializer):
    class Meta:
        model = Semester
        fields = '__all__'
        
        