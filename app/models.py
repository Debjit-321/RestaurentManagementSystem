from django.db import models

# Create your models here.
class Userdetails(models.Model):
        username = models.CharField(max_length=250)
        email  = models.CharField(max_length = 250)
        password = models.CharField(max_length=250)
        
        class Meta:
            db_table="userinfo"