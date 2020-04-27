from rest_framework.generics import ListAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView, CreateAPIView
from post.api.serializers import PostSerializer
from post.models import Post, Tweet
from utils import twitterpy
from django.contrib.auth.models import User
from rest_framework.mixins import CreateModelMixin


class PostListAPIView(ListAPIView, CreateModelMixin):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def post(self, request, *args, **kwargs):
        print(request.data)
        post = Post(user=User.objects.get(id=1), model=request.data['model'])
        post.save()
        tweets = twitterpy.getTweets(subject=request.data['model'])
        for co, i in enumerate(tweets):
            # nlp.analyze(i)
            Tweet(post=post, tweet=i).setToUniqo(co).save()
            print('*' * 30)
            print('*' * 30)
        print(post.tweets)
        return self.create(request, *args, **kwargs)

    # def get(self, request, *args, **kwargs):
    #     post = Post(user=User.objects.get(id=1), model=request.data['model'])
    #     post.save()
    #     tweets = twitterpy.getTweets(subject=request.data['model'])
    #     for co, i in enumerate(tweets):
    #         # nlp.analyze(i)
    #         Tweet(post=post, tweet=i).setToUniqo(co).save()
    #         print('*' * 30)
    #         print('*' * 30)
    #     print(post.tweets)
    #     return self.list(request, *args, **kwargs)


class PostDetailAPIView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'slug'

class PostDeleteAPIView(DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'slug'

class PostUpdateAPIView(UpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'slug'

class PostCreateAPIView(CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def post(self, request, *args, **kwargs):
        print(request.data)

        post = Post(user=User.objects.get(id=1), model=request.data['model'])
        post.save()
        tweets = twitterpy.getTweets(subject=request.data['model'])
        for co,i in enumerate(tweets):
            #nlp.analyze(i)
            Tweet(post=post, tweet=i).setToUniqo(co).save()
            print('*'*30)
            print('*' * 30)
        print(post.tweets)
        return self.create(request, *args, **kwargs)

