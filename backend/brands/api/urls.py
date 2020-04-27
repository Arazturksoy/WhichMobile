from django.urls import path
from brands.api.views import BrandListAPIView


urlpatterns = [
    path('list', BrandListAPIView.as_view(), name='list'),
    ]