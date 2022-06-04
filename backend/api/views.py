# from .models import Techworks ,Schedule,Attendance,Emails,Participants,Students,Mentors
# from .serializers import TechworksSerializer,LoginSerializer ,ScheduleSerializer,UserSerializer,AttendanceSerializer,EmailsSerializer,ParticipantsSerializer,StudentsSerializer,MentorsSerializer
from .models import Schedule,Category
from .serializers import  UserSerializer,ScheduleSerializer, CategoryListSerializer,CategorySerializer,ScheduleTabelSerializer,MyTokenObtainPairSerializer ,UsersListSerializer
from django.contrib.auth.models import User

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics ,viewsets,status

from rest_framework_simplejwt.views import TokenObtainPairView


class UserCreate(APIView):
    """ 
    Creates the user. 
    """
    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                # token = Token.objects.create(user=user)
                # json = serializer.data
                # json['token'] = token.key
                return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class UserView(generics.ListCreateAPIView):
    serializer_class = UsersListSerializer
    queryset = User.objects.all()


class CreateCategory(APIView):
     def post(self, request, format='json'):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            category = serializer.save()
            if category:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   


class CategoryView(generics.ListCreateAPIView):
    serializer_class = CategoryListSerializer
    queryset = Category.objects.all()


class CreateSchedule(APIView):
    def post(self, request, format='json'):
        serializer = ScheduleSerializer(data=request.data)
        if serializer.is_valid():
            schedule = serializer.save()
            if schedule:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   

class ScheduleView(generics.ListCreateAPIView):
    serializer_class = ScheduleTabelSerializer
    queryset = Schedule.objects.all()


# class AttendanceView(viewsets.ModelViewSet):
#     serializer_class = AttendanceSerializer
#     queryset = Attendance.objects.all()

# class EmailsView(viewsets.ModelViewSet):
#     serializer_class = EmailsSerializer
#     queryset = Emails.objects.all()

# class ParticipantsView(viewsets.ModelViewSet):
#     serializer_class = ParticipantsSerializer
#     queryset = Participants.objects.all()

# class StudentsView(viewsets.ModelViewSet):
#     serializer_class = StudentsSerializer
#     queryset = Students.objects.all()

# class MentorsView(viewsets.ModelViewSet):
#     serializer_class = MentorsSerializer
#     queryset = Mentors.objects.all()



