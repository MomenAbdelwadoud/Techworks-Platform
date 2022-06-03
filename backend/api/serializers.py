from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Techworks ,Schedule,Attendance,Emails,Participants,Students,Mentors


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = (id, 'name', 'date', 'type', 'category')


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = ('__all__')
        fields = ('username', 'password')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = ('__all__')
        fields = ('id','first_name', 'last_name', 'email', 'username', 'password')



class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = ('__all__')

class EmailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emails
        fields = ('__all__')

class ParticipantsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participants
        fields = ('__all__')

class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ('__all__')

class MentorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mentors
        fields = ('__all__')

class TechworksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Techworks
        fields = ('text',)







