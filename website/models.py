from pyexpat import model
from django.db import models

# Create your models here.
class Education(models.Model):
    name =  models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    timespan = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    description = models.TextField()
    imageurl = models.TextField()
    link = models.TextField()

class Experience(models.Model):
    name = models.CharField(max_length=50)
    shortname = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    timespan = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    description = models.TextField()
    imageurl = models.TextField()
    link = models.TextField()

class Project(models.Model):
    name = models.CharField(max_length=50)
    shortname = models.CharField(max_length=15)
    skills = models.TextField()
    timespan = models.CharField(max_length=50)
    description = models.TextField()
    objective = models.TextField()
    imageurl = models.TextField()
    link = models.TextField()

class Contact(models.Model):
    name = models.CharField(max_length=50)
    imageurl = models.TextField()
    link = models.TextField()

class Resume(models.Model):
    link = models.TextField()