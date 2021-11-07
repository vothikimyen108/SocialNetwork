from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets, generics, status, permissions
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework.decorators import action
from rest_framework.views import APIView
from django.conf import settings

#import serializer class
from .serializers import UserSerializer
#import model
from .models import User

# Create your views here.
from django.views import View


def index(request):
    return HttpResponse("Hello bạn Lộc!!")


class TestView(View):
    def get(self, request):
        return HttpResponse("DAY LA TESTING VIEW")

    def post(self, request):
        pass

class UserViewSet(viewsets.ViewSet, generics.CreateAPIView):
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserSerializer
    parser_classes = [MultiPartParser, ]

    def get_permissions(self):
        if self.action == 'get_current_user':
            return [permissions.IsAuthenticated()]

        return [permissions.AllowAny()]

    @action(methods=['get'], detail=False, url_path="current-user")
    def get_current_user(self, request):
        return Response(self.serializer_class(request.user, context={"request": request}).data,
                        status=status.HTTP_200_OK)



# lấy thông tin AuthInfo
class AuthInfo(APIView):
    def get(self, request):
        return Response(settings.OAUTH2_INFO, status=status.HTTP_200_OK)