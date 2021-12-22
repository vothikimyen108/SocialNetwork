from django.core import paginator
from rest_framework import generics, viewsets, permissions, status
from rest_framework.response import Response

from ..models import Tag
from ..serializers import TagSerializer


class TagView(viewsets.ViewSet, generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    pagination_class = None


    def get_permissions(self):
        if self.action in ['create']:
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]


