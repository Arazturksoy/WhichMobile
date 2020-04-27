from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/post/', include('post.api.urls')),
    path('api/filter/', include('filter.api.urls')),
    path('api/brand/', include('brands.api.urls')),
]
