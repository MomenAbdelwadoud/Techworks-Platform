from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Schedule,Category
# from .models import Techworks ,Schedule,Attendance,Emails,Participants,Students,Mentors
from rest_framework.validators import UniqueValidator

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    username = serializers.CharField(
        max_length=32,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(min_length=8, write_only=True)
    first_name = serializers.CharField(max_length=20, required=True)
    last_name = serializers.CharField(max_length=20, required=True)

    def create(self, validated_data):
        user = User.objects.create_user(self.validated_data['username'],
                                        first_name=self.validated_data['first_name'],
                                        last_name=self.validated_data['last_name'],
                                        email=self.validated_data['email'],
                                        password=self.validated_data['password'])
        return user

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name',
                  'username', 'email', 'password')


class UsersListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name',
                  'username', 'email', 'password')


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ('__all__')

class ScheduleTabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ('__all__')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('__all__')

class CategoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('__all__')


# class AttendanceSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Attendance
#         fields = ('__all__')

# class EmailsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Emails
#         fields = ('__all__')

# class ParticipantsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Participants
#         fields = ('__all__')

# class StudentsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Students
#         fields = ('__all__')

# class MentorsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Mentors
#         fields = ('__all__')

# class TechworksSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Techworks
#         fields = ('text',)
