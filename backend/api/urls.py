from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenRefreshView,)
from . import views
from .views import MyTokenObtainPairView

# router = routers.SimpleRouter()
# router.register(r'schedule', CreateSchedule, 'schedule')
# router.register(r'schedulelist', ScheduleView, 'schedulelist')
# router.register(r'category', CreateCategory, 'category')
# router.register(r'categorylist', CategoryView, 'categorylist')


# router.register(r'signup', views.SignupView, 'signup')
# router.register(r'login', views.LoginView, 'login')
# router.register(r'attendance', views.AttendanceView, 'attendance')
# router.register(r'email', views.EmailsView, 'email')
# router.register(r'participants', views.ParticipantsView, 'participants')
# router.register(r'students', views.StudentsView, 'students')
# router.register(r'mentors', views.MentorsView, 'mentors')
# router.register(r'main', views.main, 'main')

# router = routers.DefaultRouter()
# router.register(r'techworks/', main, 'techworks')


urlpatterns = [
    # path('routs/', include(router.urls)),
    path('users/', views.UserCreate.as_view(), name='account-create'),
    path('list/', views.UserView.as_view(), name='users-lists'),
    path('schedule/', views.CreateSchedule.as_view(), name='schedule'),
    path('schedulelist/', views.ScheduleView.as_view(), name='schedule-lists'),
    path('category/', views.CreateCategory.as_view(), name='category'),
    path('categorylist/', views.CategoryView.as_view(), name='category-lists'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]