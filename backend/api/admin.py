from django.contrib import admin
from .models import Schedule,Attendance,Emails,Participants,Students,Mentors

class ScheduleAdmin(admin.ModelAdmin):
    list_display = ('name', 'date', 'type', 'category' )

# class UserAdmin(admin.ModelAdmin):
#     list_display = ('first_name','last_name','username','email', 'password')

class AttendanceAdmin(admin.ModelAdmin):
    list_display = ('participants_id', 'date' ,'status')

class EmailsAdmin(admin.ModelAdmin):
    list_display = ('email_title', 'email_body' ,'email_list')

class ParticipantsAdmin(admin.ModelAdmin):
    list_display = ('randomCode', 'user_id','firstname','lastname','birthday','role')

class StudentsAdmin(admin.ModelAdmin):
    list_display = ('participants_id', 'batch_id','group_id','progress' ,'subbmtions','attendance')

class MentorsAdmin(admin.ModelAdmin):
    list_display = ('participants_id', 'category','progress','attendance')



# Register your models here. ,'progress','subbmtions', 'attendance'

admin.site.register(Schedule, ScheduleAdmin)
# admin.site.register(User ,UserAdmin)
admin.site.register(Attendance, AttendanceAdmin)
admin.site.register(Emails, EmailsAdmin)
admin.site.register(Participants, ParticipantsAdmin)
admin.site.register(Students, StudentsAdmin)
admin.site.register(Mentors, MentorsAdmin)
