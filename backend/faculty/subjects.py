from rest_framework.response import Response
from rest_framework import status
from faculty.serializers import *
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from faculty.utils import *
from django.http.response import Http404
from django.shortcuts import get_object_or_404
from django.utils import timezone
from rest_framework.utils.serializer_helpers import  ReturnList
from django.db.models import Q
from datetime import datetime
from faculty.models import *
from account.utils import GET_FIELD_ERRORS_FORMAT


# Create your views here.
class SubjectView(APIView):
    permission_classes = [IsAuthenticated]

    def get_by_sem(self, sem):
        subjects = Subject.objects.filter(semester__number = sem)
        subject_data = SubjectSerializers(subjects, many=True).data
        return {"error":False, "msg":"Subject data", "data":subject_data}
    
    def get_all_subjects(self):
        subjects = Subject.objects.all()   
        subject_data = SubjectSerializers(subjects, many=True)
        return {"error":False, "msg":"Subject data", "data":subject_data}
        
    def get(self,request):
        query_params = request.query_params
        if query_params:
            # if number exists in query params, return single order data by that number
            if "sem" in query_params:
                sem = query_params.get("sem", None)
                subject_data = self.get_by_sem(sem)
                if subject_data["error"] == True:
                    return Response(subject_data, status=status.HTTP_404_NOT_FOUND)
                
                return Response(subject_data,status=status.HTTP_200_OK)
            else:
                return Response({"error": True, "msg": "invalid query params in url", "data": None}, status=status.HTTP_400_BAD_REQUEST)
        else:
            subject_data = self.get_all_subjects()
            if subject_data["error"] == True:
                return Response(subject_data, status=status.HTTP_404_NOT_FOUND)
                
            return Response(subject_data,status=status.HTTP_200_OK)
            
        
                        
                        
    def add_new_subject(self, subject_data, user):
        for field in ["semester","name","description"]:
            if field not in subject_data:
                return {"error":True, "msg":f"{field} not present in request data","data":None}
        sem = get_object_or_404(Semester, number = subject_data["semester"])
        subject_data["semester"] = sem.id
        subject_data["added_by"] = user.id
        serializer = SubjectSerializers(data=subject_data)
        if not serializer.is_valid():
            msg = GET_FIELD_ERRORS_FORMAT(serializer.errors)
            return {"error": True, "msg": msg, "data": None}
        
        if serializer.is_valid():
            serializer.save()
            subject_data = serializer.data
            return {"error":False, "msg":"Subject added successfully", "data":subject_data}
        
        
    def post(self, request):
        query_params = request.query_params
        if query_params:
            return Response({"error": True, "msg": "invalid query params in url", "data": None}, status=status.HTTP_400_BAD_REQUEST)
            
        ret = self.add_new_subject(request.data, request.user)
        if ret['error'] == True:
            return Response(ret, status=status.HTTP_400_BAD_REQUEST)
        
        return Response(ret, status=status.HTTP_200_OK)
        
    
    def update_subject(self, id,subject_data):
        try:
            subject_obj = get_object_or_404(Subject, id=id)
            for key, value in subject_data.items():
                setattr(subject_obj, key, value)
            subject_obj.save()
          
            serializer = SubjectSerializers(subject_obj).data
            return {"error":False, "msg":"Subject Details  updated succesfully", "data":serializer}
        except Http404:
            return {"error":True,"msg":f"Subject with id {id} not found"}
        

    def put(self, request):
        query_params = request.query_params

        if query_params:
            if 'id' in query_params:
                number = int(query_params.get('id', None) )# /subject/?id=5
                ret = self.update_subject(number, request.data)
                if ret['error'] == True:
                    return Response(ret, status=status.HTTP_404_NOT_FOUND)
                return Response(ret, status=status.HTTP_200_OK)
            else:
                return Response({"error": True, "msg": "invalid query params in url", "data": None}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": True, "msg": "Subject id expected in query params in url", "data": None}, status=status.HTTP_400_BAD_REQUEST)


    def delete_subject(self, id):

        try:
            subject = get_object_or_404(Subject, id = id)
        except Http404:
            return {"error":True,"msg":f"subject with id {id} not found", "data":None}
        subject.delete()
        return {"error":False, "msg":"subject deleted successfully","data":None}


    def delete(self, request):
        query_params = request.query_params

        if query_params:
            if 'id' in query_params:
                number = int(query_params.get('id', None) )# /subject/?id=5
                ret = self.delete_subject(number)
                if ret['error'] == True:
                    return Response(ret, status=status.HTTP_404_NOT_FOUND)
                return Response(ret, status=status.HTTP_200_OK)
            else:
                return Response({"error": True, "msg": "invalid query params in url", "data": None}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": True, "msg": "subject id expected in query params in url", "data": None}, status=status.HTTP_400_BAD_REQUEST)


