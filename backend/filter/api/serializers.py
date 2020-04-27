from rest_framework.serializers import ModelSerializer
from filter.models import Filter

class FilterSerializer(ModelSerializer):
    class Meta:
        model = Filter
        fields = [
            'user',
            'search',
            'slug',
            'id',
            'tweets'
        ]