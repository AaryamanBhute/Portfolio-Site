from django.contrib import admin

from .models import Education
from .models import Experience
from .models import Project
from .models import Contact
from .models import Resume
# Register your models here.

admin.site.register(Education)
admin.site.register(Experience)
admin.site.register(Project)
admin.site.register(Contact)
admin.site.register(Resume)