from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
from django.views import View


def index(request):
    return HttpResponse("Hello bạn Lộc!!")


class TestView(View):
    def get(self, request):
        return HttpResponse("DAY LA TESTING VIEW")

    def post(self, request):
        pass