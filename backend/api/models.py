from statistics import mode
from django.db import models



class Schedule(models.Model):
    name = models.CharField(max_length=120)
    date = models.DateTimeField()
    category = models.ForeignKey('Category', on_delete=models.CASCADE,null=True)
    has_assignment = models.BooleanField(default=False)
    assignment_deadline = models.DateTimeField(null=True)
    assignment_title = models.CharField(max_length=120)
    assignment_description = models.TextField(null=True)


    def _str_(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    number_of_sessions = models.IntegerField()
    has_assignment = models.BooleanField(default=False)
    number_of_assignment = models.IntegerField()


    def _str_(self):
        return self.name

# class Attendance(models.Model):
#     participants_id = models.OneToOneField("api.Participants",on_delete=models.CASCADE)
#     date = models.DateTimeField()
#     status = models.CharField(max_length=120)

#     def _str_(self):
#         return self.participants_id

# class Emails(models.Model):
#     email_title = models.CharField(max_length=254)
#     email_body = models.TextField()
#     email_list = models.EmailField(max_length=254)

#     def _str_(self):
#         return self.email_title




# class Participants(models.Model):
#     # image = models.ImageField()
#     # qrCode = models.ImageField()
#     randomCode = models.IntegerField()
#     user_id = models.OneToOneField(User,on_delete=models.CASCADE)
#     firstname = models.CharField(max_length=254)
#     lastname = models.CharField(max_length=254)
#     birthday = models.DateField(max_length=254)
#     role = models.CharField(max_length=120)

#     def _str_(self):
#         return self.firstname

# class Students(models.Model):
#     participants_id = models.OneToOneField("api.Participants",on_delete=models.CASCADE)
#     batch_id = models.CharField(max_length=254)
#     group_id = models.CharField(max_length=254)
#     progress = models.FloatField()
#     subbmtions = models.FloatField()
#     attendance = models.FloatField()

#     def _str_(self):
#         return self.participants_id

# class Mentors(models.Model):
#     participants_id = models.OneToOneField("api.Participants",on_delete=models.CASCADE)
#     category = models.CharField(max_length=100)
#     progress = models.FloatField()
#     attendance = models.FloatField()

#     def _str_(self):
#         return self.participants_id


