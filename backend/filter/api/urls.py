from django.urls import path, include
from filter.api.views import FilterListAPIView, FilterCreateAPIView, FilterDetailAPIView


urlpatterns = [
    path('list', FilterListAPIView.as_view(), name='list'),
    path('create/', FilterCreateAPIView.as_view(), name='create'),
    path('detail/<slug>', FilterDetailAPIView.as_view(), name='detail'),
]
