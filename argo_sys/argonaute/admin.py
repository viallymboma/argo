from django.contrib import admin
from .models import Sailors

# Register your models here.


class SailorsAdmin(admin.ModelAdmin):
	list_display = [
		"firstName",
        "lastName",
        "dateOfBirth",
        "height",
        "weight",
        "origin",
        "language",
        "skill",
        "experience",
        # "dateOfFirstSail",
        "maritalStatus",
        "description",
        "salary",
        "timestamp",
        "updated"
	]

	class Meta:
		model = Sailors


admin.site.register(Sailors, SailorsAdmin)