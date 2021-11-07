from django.urls import path, re_path
from . import views
from .admin import admin_site
from rest_framework import routers
from django.urls import path, include


router = routers.DefaultRouter()
router.register("users", views.UserViewSet, 'user')


urlpatterns = [
    path('', include(router.urls)),
    path('oauth2-info/', views.AuthInfo.as_view()),
    path('admin/', admin_site.urls)
]
