from django.urls import path, re_path
from . import views
from .admin import admin_site

urlpatterns = [
    path('', views.index, name="index"),
    path('test/', views.TestView.as_view()),
    path('admin/', admin_site.urls)
]
