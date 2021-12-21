from rest_framework import generics, viewsets, permissions

from ..models import Tag
from ..serializers import TagSerializer


class TagView(viewsets.ViewSet, generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    def get_permissions(self):
        if self.action in ['get-post']:
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]