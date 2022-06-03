"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from api import views

router = routers.SimpleRouter()
router.register(r'schedule', views.ScheduleView, 'schedule')
router.register(r'signup', views.SignupView, 'signup')
router.register(r'login', views.LoginView, 'login')
router.register(r'attendance', views.AttendanceView, 'attendance')
router.register(r'email', views.EmailsView, 'email')
router.register(r'participants', views.ParticipantsView, 'participants')
router.register(r'students', views.StudentsView, 'students')
router.register(r'mentors', views.MentorsView, 'mentors')
# router.register(r'main', views.main, 'main')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]