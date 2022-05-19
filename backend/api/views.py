import imp
from django.shortcuts import render
from rest_framework import generics
from .models import Techworks
from .serializers import TechworksSerializer
# Create your views here.


class main(generics.ListCreateAPIView):
    queryset = Techworks.objects.all()
    serializer_class = TechworksSerializer
