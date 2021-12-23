from django.urls import path, re_path
from . import views
from .admin import admin_site
from rest_framework import routers
from django.urls import path, include


router = routers.DefaultRouter()
router.register("users", views.UserViewSet, 'user')
router.register('sendpass', views.SendPass, basename='MyModel')
router.register("post", views.PostView)
router.register("auction_post", views.AuctionPostView)
router.register("image", views.ImageView)
router.register("product", views.ProductView)
router.register("tag", views.TagView)
router.register("notification", views.NotificationViewSet)
router.register("report", views.ReportView)
router.register("type_report", views.TypeReportView)



urlpatterns = [
    path('', include(router.urls)),
    path('oauth2-info/', views.AuthInfo.as_view()),
    path('admin/', admin_site.urls),
    path('accounts/login/', views.Login.as_view())
]
