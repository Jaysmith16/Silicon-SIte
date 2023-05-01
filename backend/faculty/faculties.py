from rest_framework.response import Response
from rest_framework import status
from faculty.serializers import *
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from faculty.utils import *
from django.http.response import Http404
from django.shortcuts import get_object_or_404
from rest_framework.utils.serializer_helpers import  ReturnList
from django.db.models import Q
from datetime import datetime
from faculty.models import *
from account.utils import GET_FIELD_ERRORS_FORMAT



class FacultyView(APIView):
    permission_classes = [IsAuthenticated]

    def get_by_sem(self, sem):
        faculties = Faculty.objects.filter(semester__number = sem)
        faculty_data = FacultySerializers(faculties, many=True).data
        for data in faculty_data:
            data["department"] = FACULTY_DEPARTMENT_FULL_NAME[data["department"]]
        return {"error":False, "msg":"Faculty data", "data":faculty_data}
        
        
    def get(self,request):
        query_params = request.query_params
        if query_params:
            # if number exists in query params, return single order data by that number
            if "sem" in query_params:
                sem = query_params.get("sem", None)
                faculty_data = self.get_by_sem(sem)
                if faculty_data["error"] == True:
                    return Response(faculty_data, status=status.HTTP_404_NOT_FOUND)
                
                return Response(faculty_data,status=status.HTTP_200_OK)
            else:
                return Response({"error": True, "msg": "invalid query params in url", "data": None}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": True, "msg": "Semester number expected in urls", "data": None}, status=status.HTTP_400_BAD_REQUEST)
            
        
                        
                        
    def add_new_faculty(self, faculty_data):
        for field in ["semester","name","department", "subject_1","subject_2","subject_3"]:
            if field not in faculty_data:
                return {"error":True, "msg":f"{field} not present in request data","data":None}
        sem = get_object_or_404(Semester, number = faculty_data["semester"])
        faculty_data["semester"] = sem.id
        serializer = FacultySerializers(data=faculty_data)
        if not serializer.is_valid():
            msg = GET_FIELD_ERRORS_FORMAT(serializer.errors)
            return {"error": True, "msg": msg, "data": None}
        
        if serializer.is_valid():
            serializer.save()
            faculty_data = serializer.data
            return {"error":False, "msg":"Faculty added successfully", "data":faculty_data}
        
        
    def post(self, request):
        query_params = request.query_params
        if query_params:
            return Response({"error": True, "msg": "invalid query params in url", "data": None}, status=status.HTTP_400_BAD_REQUEST)
            
        ret = self.add_new_faculty(request.data)
        if ret['error'] == True:
            return Response(ret, status=status.HTTP_400_BAD_REQUEST)
        
        return Response(ret, status=status.HTTP_200_OK)

    
    def update_faculty(self, id,faculty_data):
        try:
            faculty_obj = get_object_or_404(Faculty, id=id)
            if "department" in faculty_data:
                if faculty_data["department"] not in FACULTY_DEPARTMENT:
                    return {"error":True,"msg":"Department not valid, please enter a valid department", "data":None}
                    
            for key, value in faculty_data.items():
                setattr(faculty_obj, key, value)
            faculty_obj.save()
          
            serializer = FacultySerializers(faculty_obj).data
            return {"error":False, "msg":"Faculty Details  updated succesfully", "data":serializer}
        except Http404:
            return {"error":True,"msg":f"Faculty with id {id} not found"}
        

    def put(self, request):
        query_params = request.query_params

        if query_params:
            if 'id' in query_params:
                number = int(query_params.get('id', None) )# /faculty/?id=5
                ret = self.update_faculty(number, request.data)
                if ret['error'] == True:
                    return Response(ret, status=status.HTTP_404_NOT_FOUND)
                return Response(ret, status=status.HTTP_200_OK)
            else:
                return Response({"error": True, "msg": "invalid query params in url", "data": None}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": True, "msg": "Faculty id expected in query params in url", "data": None}, status=status.HTTP_400_BAD_REQUEST)


    def delete_faculty(self, id):

        try:
            faculty = get_object_or_404(Faculty, id = id)
        except Http404:
            return {"error":True,"msg":f"faculty with id {id} not found", "data":None}
        faculty.delete()
        return {"error":False, "msg":"faculty deleted successfully","data":None}


    def delete(self, request):
        query_params = request.query_params

        if query_params:
            if 'id' in query_params:
                number = int(query_params.get('id', None) )# /faculty/?id=5
                ret = self.delete_faculty(number)
                if ret['error'] == True:
                    return Response(ret, status=status.HTTP_404_NOT_FOUND)
                return Response(ret, status=status.HTTP_200_OK)
            else:
                return Response({"error": True, "msg": "invalid query params in url", "data": None}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": True, "msg": "faculty id expected in query params in url", "data": None}, status=status.HTTP_400_BAD_REQUEST)


class FacultyAllocationView(APIView):
    
    def get_facutly_by_sem(self, request_data):
        for field in ["semester","sub_name"]:
            if field not in request_data:
                return {"error":True, "msg":f"{field} not present in request data","data":None}
            
        sem  = request_data["semester"]
        subject_name = request_data["sub_name"]

        faculties_1 = Faculty.objects.filter(Q(Q(subject_1 = subject_name) & Q(semester__number = sem)))
        faculties_2 = Faculty.objects.filter(Q(Q(subject_2 = subject_name) & Q(semester__number = sem)))
        faculties_3 = Faculty.objects.filter(Q(Q(subject_3 = subject_name) & Q(semester__number = sem)))
        faculty1_data = FacultySerializers(faculties_1, many= True).data
        faculty2_data = FacultySerializers(faculties_2, many= True).data
        faculty3_data = FacultySerializers(faculties_3, many= True).data
        
        return {"error":False, "msg":f"Faculties having subject {subject_name} as preference in order", "data":[*faculty1_data, *faculty2_data, *faculty3_data]}
        
    
    def post(self, request):
        query_params = request.query_params
        if query_params:
            # if number exists in query params, return single order data by that number
            if "get" in query_params:
                faculty_data = self.get_facutly_by_sem(request.data)
                if faculty_data["error"] == True:
                    return Response(faculty_data, status=status.HTTP_404_NOT_FOUND)
                
                return Response(faculty_data,status=status.HTTP_200_OK)
            else:
                return Response({"error": True, "msg": "invalid query params in url", "data": None}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": True, "msg": "get expected in query params", "data": None}, status=status.HTTP_400_BAD_REQUEST)