from json import dumps
from os import stat
from urllib import response
from django.conf import settings
from django.shortcuts import render
from .models import Contact, Education, Experience, Project
from django.core import serializers
from django.templatetags.static import static

# Create your views here.
def home(request):
	educations = Education.objects.all()
	experiences = Experience.objects.all()
	projects = Project.objects.all()
	contacts = Contact.objects.all()
	dic = {
	"educations": educations,
	"experiences": experiences,
	"projects": projects,
	"contacts": contacts,
	}
	jexp = serializers.serialize("json", Experience.objects.all())
	jproj = serializers.serialize("json", Project.objects.all())
	dic["expjson"] = jexp
	dic["projjson"] = jproj
	dic["static_url"] = static('')
	if not request.COOKIES.get('scheme'):
		response = render(request, 'website/home.html', dic)
		response.set_cookie('scheme', 'dark')
		print("here")
		return(response)
	print(request.COOKIES['scheme'])
	dic['scheme'] = request.COOKIES['scheme']
	return(render(request, 'website/home.html', dic))