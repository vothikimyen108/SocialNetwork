from django.http import HttpResponse, HttpResponseRedirect
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
# import email
from django.core.mail import BadHeaderError, send_mail


# import serializer class
from .serializers import UserSerializer
# import model
#import serializer class
from .serializers import UserSerializer, UpdateUserSerializer
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
        if self.action in ['get_current_user', 'update_info_user']:
            return [permissions.IsAuthenticated()]

        return [permissions.AllowAny()]

    def get_serializer_class(self):
        if self.action in ['update_info_user']:
            return UpdateUserSerializer
        else:
            return UserSerializer

    @action(methods=['get'], detail=False, url_path="current-user")
    def get_current_user(self, request):
        return Response(self.serializer_class(request.user, context={"request": request}).data,
                        status=status.HTTP_200_OK)

    @action(methods=['PATCH'], detail=False, url_path="update-info-user")
    def update_info_user(self, request):
        user = self.request.user
        if request.user != user:
            return Response(status=status.HTTP_403_FORBIDDEN)
        else:
            first_name = request.data.get('first_name')
            last_name = request.data.get('last_name')
            avatar = request.FILES.get('avatar')
            address = request.data.get('address')
            phone_number = request.data.get('phone_number')
            email = request.data.get('email')
            gender = request.data.get('gender')
            birthday = request.data.get('birthday')
            user.avatar = avatar
            if email is not None:
                user.email = email
            else:
                user.email = user.email

            if first_name is not None:
                user.first_name = first_name
            else:
                user.first_name = user.first_name

            if last_name is not None:
                user.last_name = last_name
            else:
                user.last_name = user.last_name
            user.gender = gender
            user.birthday = birthday
            user.address = address
            user.phone_number = phone_number
            user.save()
        serializer = UpdateUserSerializer(user, many=False)
        return Response(data=serializer.data, status=status.HTTP_200_OK)



# l???y th??ng tin AuthInfo
class AuthInfo(APIView):
    def get(self, request):
        return Response(settings.OAUTH2_INFO, status=status.HTTP_200_OK)



class SendPass(viewsets.ViewSet, generics.RetrieveAPIView):
    @action(methods=['get'], detail=False, url_path="send_pass")
    def send_pass(self, request):
        email = self.request.query_params.get('email')
        new_pass = self.get_random_string()
        try:
            user = User.objects.get(username=email)
            user.set_password(new_pass)
            user.save()
            message = "New password is: " + new_pass
            # g???i v??? email
            user.email_user(subject="[Charity Social Network An Tam][New PassWord]", message=message)
        except User.DoesNotExist:
            return Response(data="Email is not in the system", status=status.HTTP_400_BAD_REQUEST)
        return Response(data="Th??nh c??ng", status=status.HTTP_200_OK)

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
