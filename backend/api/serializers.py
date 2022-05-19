from rest_framework import serializers
from .models import Techworks


class TechworksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Techworks
        fields = ('text',)
