from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
from brands.models import Brand


class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=150)
    score = models.CharField(max_length=10)
    tweets = []
    slug = models.SlugField(unique=True, max_length=150, editable=False)
    image = models.TextField(blank = True)

    def __str__(self):
        return self.model

    def get_slug(self):
        slug = slugify(self.model.replace('ı','i'))
        unique = slug
        number = 1
        while Post.objects.filter(slug = unique).exists():
            unique = '{}-{}'.format(slug,number)
            number += 1
        return unique

    def save(self, *args, **kwargs):
        self.slug = self.get_slug()
        return super(Post, self).save(*args, **kwargs)

class Tweet(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    tweet = models.CharField(max_length=250)
    unique_id = 0

    def setToUniqo(self, uniqo):
        self.unique_id = uniqo
        return self

    def save(self, *args, **kwargs):
        self.post.tweets.append({'tweet':self.tweet, 'id':self.unique_id})
        return super(Tweet, self).save(*args, **kwargs)



