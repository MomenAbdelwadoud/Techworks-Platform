import imp
from django.shortcuts import render
from rest_framework import generics ,viewsets ,permissions
from .models import Techworks ,Schedule,Attendance,Emails,Participants,Students,Mentors
from .serializers import TechworksSerializer,LoginSerializer ,ScheduleSerializer,UserSerializer,AttendanceSerializer,EmailsSerializer,ParticipantsSerializer,StudentsSerializer,MentorsSerializer
# Create your views here.

from django.contrib.auth.models import User
from rest_framework.views import APIView
from django.contrib import auth
from rest_framework.response import Response
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator



class main(generics.ListCreateAPIView):
    queryset = Techworks.objects.all()
    serializer_class = TechworksSerializer

class ScheduleView(viewsets.ModelViewSet):
    serializer_class = ScheduleSerializer
    queryset = Schedule.objects.all()


# class UserView(viewsets.ModelViewSet):
#     serializer_class = UserSerializer
#     queryset = User.objects.all()

class AttendanceView(viewsets.ModelViewSet):
    serializer_class = AttendanceSerializer
    queryset = Attendance.objects.all()

class EmailsView(viewsets.ModelViewSet):
    serializer_class = EmailsSerializer
    queryset = Emails.objects.all()

class ParticipantsView(viewsets.ModelViewSet):
    serializer_class = ParticipantsSerializer
    queryset = Participants.objects.all()

class StudentsView(viewsets.ModelViewSet):
    serializer_class = StudentsSerializer
    queryset = Students.objects.all()

class MentorsView(viewsets.ModelViewSet):
    serializer_class = MentorsSerializer
    queryset = Mentors.objects.all()







class CheckAuthenticatedView(viewsets.ModelViewSet):
    def get(self, request, format=None):
        user = self.request.user

        try:
            isAuthenticated = user.is_authenticated

            if isAuthenticated:
                return Response({ 'isAuthenticated': 'success' })
            else:
                return Response({ 'isAuthenticated': 'error' })
        except:
            return Response({ 'error': 'Something went wrong when checking authentication status' })

@method_decorator(csrf_protect, name='dispatch')
class SignupView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        first_name = data['first_name']
        last_name = data['last_name']
        email = data['email']
        username = data['username']
        password = data['password']

        try:
            if User.objects.filter(username=username).exists():
                print("before signup")
                return Response({ 'error': 'Username already exists' })
            else:
                if len(password) < 6:
                    return Response({ 'error': 'Password must be at least 6 characters' })
                else:
                    user = User.objects.create_user(first_name = first_name, last_name = last_name, email = email,username=username, password=password)

                    user = User.objects.get(id=user.id)

                    # user_profile = UserProfile.objects.create(user=user, first_name='', last_name='', phone='', city='')

                    return Response({ 'success': 'User created successfully' })

        except:
                return Response({ 'error': 'Something went wrong when registering account' })


@method_decorator(csrf_protect, name='dispatch')
class LoginView(viewsets.ModelViewSet):
    serializer_class = LoginSerializer
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        username = data['username']
        password = data['password']

        try:
            print("before")
            user = auth.authenticate(username=username, password=password)

            if user is not None:
                auth.login(request, user)
                return Response({ 'success': 'User authenticated' })
            else:
                return Response({ 'error': 'Error Authenticating' })
        except:
            return Response({ 'error': 'Something went wrong when logging in' })

