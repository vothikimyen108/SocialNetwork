from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import render
from .view import *
from rest_framework import viewsets, generics, status, permissions
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework.decorators import action
from rest_framework.views import APIView
from django.conf import settings
import random
import string
import json
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
#import email
from django.core.mail import BadHeaderError, send_mail

#import serializer class
from .serializers import UserSerializer
#import model
from .models import User

# Create your views here.
from django.views import View


def index(request):
    return HttpResponse("Home town Cha cha cha")


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

#gửi email
class SendPass(viewsets.ViewSet,generics.RetrieveAPIView):
    @action(methods=['get'], detail=False, url_path="send_pass")
    def send_pass(self, request):
        email = self.request.query_params.get('email')
        new_pass = self.get_random_string()
        try:
            user = User.objects.get(email=email, is_active=True)
            user.set_password(new_pass)
            user.save()
            message="New password is: " +new_pass
            #gủi về email
            user.email_user(subject="[Charity Social Network An Tam][New PassWord]", message=message)
        except User.DoesNotExist:
            return Response(data="Email is not in the system",status=status.HTTP_400_BAD_REQUEST)
        return Response(data="Thành công",status=status.HTTP_200_OK)

    def get_random_string(self):
        letters = string.ascii_lowercase
        result_str = ''.join(random.choice(letters) for i in range(6))
        return result_str



class Login(View):
    def get(self, request):
        return render(request, template_name='login.html')

    def post(self, request):
        username = request.POST['username']
        password = request.POST['password']
        print('before login: username: ' + username, 'password: ' + password)
        user = authenticate(request, username=username, password=password)
        print(user)
        if user is not None:
            login(request, user)
            next_to = request.GET.get("next")
            if next_to is not None:
                return redirect(next_to)
            return redirect('/')
        return redirect('/accounts/login')


def logouts(request):
    logout(request)

    return redirect("/accounts/login")