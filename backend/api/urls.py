from django.urls import path, include
from rest_framework import routers
from .views import main

router = routers.DefaultRouter()
# router.register(r'techworks/', main, 'techworks')
urlpatterns = [
    path('', main.as_view()),
]
