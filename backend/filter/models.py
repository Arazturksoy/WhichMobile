from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify


class Filter(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    search = models.CharField(max_length=60)
    slug = models.SlugField(unique=True, max_length=150, editable=False)
    tweets = []

    def __str__(self):
        return self.search

    def get_slug(self):
        slug = slugify(self.search.replace('ı','i'))
        unique = slug
        number = 1
        while Filter.objects.filter(slug = unique).exists():
            unique = '{}-{}'.format(slug,number)
            number += 1
        return unique

    def save(self, *args, **kwargs):
        self.slug = self.get_slug()
        return super(Filter, self).save(*args, **kwargs)

class Tweet(models.Model):
    filter = models.ForeignKey(Filter, on_delete=models.CASCADE)
    tweet = models.CharField(max_length=250)
    unique_id = 0

    def setToUniqo(self, uniqo):
        self.unique_id = uniqo
        return self

    def save(self, *args, **kwargs):
        self.filter.tweets.append({'tweet':self.tweet, 'id':self.unique_id})
        return super(Tweet, self).save(*args, **kwargs)

