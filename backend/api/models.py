from django.db import models

# Create your models here.
# test model with one text field


class Techworks(models.Model):
    text = models.TextField()

    def __str__(self):
        return self.text
