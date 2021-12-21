from rest_framework import generics, viewsets, permissions, status
from rest_framework.response import Response

from ..models import Tag
from ..serializers import TagSerializer


class TagView(viewsets.ViewSet, generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    def get_permissions(self):
        if self.action in ['create']:
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

    def list(self, request, *args, **kwargs):
        try:
            tag = Tag.objects.all()
            page = self.paginate_queryset(tag)
        except Tag.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        if page is not None:
            serializer = TagSerializer(page, many=True)
        return self.get_paginated_response(serializer.data)