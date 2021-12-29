from django.urls import path, re_path
from . import views
from .admin import admin_site
from rest_framework import routers
from django.urls import path, include


router = routers.DefaultRouter()
router.register(r"users", views.UserViewSet, 'user')
router.register(r'sendpass', views.SendPass, basename='MyModel')
router.register(r"post", views.PostView)
router.register(r"auction_post", views.AuctionPostView)
router.register(r"image", views.ImageView)
router.register(r"product", views.ProductView)
router.register(r"tag", views.TagView)
router.register(r"notification", views.NotificationViewSet)
router.register(r"report", views.ReportView)
router.register(r"type_report", views.TypeReportView)



urlpatterns = [
    path('', include(router.urls)),
    path('oauth2-info/', views.AuthInfo.as_view()),
    path('admin/', admin_site.urls),
    path('accounts/login/', views.Login.as_view())
]