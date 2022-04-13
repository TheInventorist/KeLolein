from pyexpat import model
from django.db import models

class Sale(models.Model):
    id = models.AutoField(primary_key=True)
    detail = models.CharField(max_length=200)
    date = models.DateField()
    amount = models.IntegerField()

