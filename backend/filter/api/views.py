from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView
from rest_framework.mixins import CreateModelMixin
from filter.api.serializers import FilterSerializer
from utils import twitterpy, nlp
from filter.models import Filter, Tweet
from django.contrib.auth.models import User


class FilterListAPIView(ListAPIView, CreateModelMixin):
    queryset = Filter.objects.all()
    serializer_class = FilterSerializer

class FilterDetailAPIView(RetrieveAPIView):
    queryset = Filter.objects.all()
    serializer_class = FilterSerializer
    lookup_field = 'slug'

class FilterCreateAPIView(CreateAPIView):
    queryset = Filter.objects.all()
    serializer_class = FilterSerializer

    def post(self, request, *args, **kwargs):
        print(request.data)
        filter = Filter(user=User.objects.get(id=1), search=request.data['search'])
        filter.save()
        tweets = twitterpy.getTweets(subject=request.data['search'])
        for co, i in enumerate(tweets):
            # nlp.analyze(i)
            Tweet(filter=filter, tweet=i).setToUniqo(co).save()
            print('*' * 30)
            print('*' * 30)
        print(filter.tweets)
        return self.create(request, *args, **kwargs)

