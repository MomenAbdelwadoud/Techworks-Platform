from django.contrib.auth.models import User
from django.db import models

# Create your models here.
# test model with one text field


class Techworks(models.Model):
    text = models.TextField()

    def __str__(self):
        return self.text


class Schedule(models.Model):
    name = models.CharField(max_length=120)
    date = models.DateTimeField()
    type = models.CharField(max_length=120)
    category = models.CharField(max_length=120)

    def _str_(self):
        return self.name

# return { id, name, date, type, category };

# class User(models.Model):

#     username = models.CharField(max_length=120)
#     email = models.EmailField(max_length=254)
#     password = models.CharField(max_length=120)
#     role = models.CharField(max_length=120)

#     def _str_(self):
#         return self.email

class Attendance(models.Model):
    participants_id = models.OneToOneField("api.Participants",on_delete=models.CASCADE)
    date = models.DateTimeField()
    status = models.CharField(max_length=120)

    def _str_(self):
        return self.participants_id

class Emails(models.Model):
    email_title = models.CharField(max_length=254)
    email_body = models.TextField()
    email_list = models.EmailField(max_length=254)

    def _str_(self):
        return self.email_title




class Participants(models.Model):
    # image = models.ImageField()
    # qrCode = models.ImageField()
    randomCode = models.IntegerField()
    user_id = models.OneToOneField(User,on_delete=models.CASCADE)
    firstname = models.CharField(max_length=254)
    lastname = models.CharField(max_length=254)
    birthday = models.DateField(max_length=254)
    role = models.CharField(max_length=120)

    def _str_(self):
        return self.firstname

class Students(models.Model):
    participants_id = models.OneToOneField("api.Participants",on_delete=models.CASCADE)
    batch_id = models.CharField(max_length=254)
    group_id = models.CharField(max_length=254)
    progress = models.FloatField()
    subbmtions = models.FloatField()
    attendance = models.FloatField()

    def _str_(self):
        return self.participants_id

class Mentors(models.Model):
    participants_id = models.OneToOneField("api.Participants",on_delete=models.CASCADE)
    category = models.CharField(max_length=100)
    progress = models.FloatField()
    attendance = models.FloatField()

    def _str_(self):
        return self.participants_id


