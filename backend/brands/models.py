from django.db import models
from django.contrib.auth.models import User


class Brand(models.Model):
    brand = models.CharField(max_length=200)
    image = models.TextField(blank = True)

    def __str__(self):
        return self.brand




