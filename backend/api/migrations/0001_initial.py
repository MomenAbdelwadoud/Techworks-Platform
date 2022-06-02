# Generated by Django 4.0.5 on 2022-06-02 14:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Emails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email_title', models.CharField(max_length=254)),
                ('email_body', models.TextField()),
                ('email_list', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Participants',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('randomCode', models.IntegerField()),
                ('firstname', models.CharField(max_length=254)),
                ('lastname', models.CharField(max_length=254)),
                ('birthday', models.DateField(max_length=254)),
                ('role', models.CharField(max_length=120)),
                ('user_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('date', models.DateTimeField()),
                ('type', models.CharField(max_length=120)),
                ('category', models.CharField(max_length=120)),
            ],
        ),
        migrations.CreateModel(
            name='Techworks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Students',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('batch_id', models.CharField(max_length=254)),
                ('group_id', models.CharField(max_length=254)),
                ('progress', models.FloatField()),
                ('subbmtions', models.FloatField()),
                ('attendance', models.FloatField()),
                ('participants_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='api.participants')),
            ],
        ),
        migrations.CreateModel(
            name='Mentors',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=100)),
                ('progress', models.FloatField()),
                ('attendance', models.FloatField()),
                ('participants_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='api.participants')),
            ],
        ),
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField()),
                ('status', models.CharField(max_length=120)),
                ('participants_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='api.participants')),
            ],
        ),
    ]
