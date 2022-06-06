from django.db import models

class Persona(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    lastname = models.CharField(max_length=120)
    email = models.EmailField(max_length=200)
