from django.db import models

# Create your models here.


class Sailors(models.Model):
    firstName = models.CharField(blank=True, max_length=500, null=True)
    lastName = models.CharField(blank=True, max_length=500, null=True)
    dateOfBirth = models.CharField(blank=True, max_length=500, null=True)
    height = models.IntegerField(blank=True, null=True)
    weight = models.IntegerField(blank=True, null=True)
    origin = models.CharField(blank=True, max_length=500, null=True)
    language = models.CharField(blank=True, max_length=500, null=True)
    skill = models.CharField(blank=True, max_length=500, null=True)

    # dateOfFirstSail = models.CharField(blank=True, max_length=500, null=True)
    experience = models.IntegerField(blank=True, null=True)
    gender = models.CharField(blank=True, max_length=500, null=True)
    maritalStatus = models.CharField(blank=True, max_length=500, null=True)
    description = models.CharField(blank=True, max_length=500, null=True)
    salary = models.IntegerField(blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)
    # meat = models.ForeignKey(Meat, on_delete=models.CASCADE, blank=True, null=True)
    # price = models.ForeignKey(Price, on_delete=models.CASCADE, default=0, blank=True, null=True)

    def __str__(self):
        return str(self.lastName)