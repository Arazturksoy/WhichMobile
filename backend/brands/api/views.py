from rest_framework.generics import ListAPIView
from brands.api.serializers import BrandSerializer
from brands.models import Brand


class BrandListAPIView(ListAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer