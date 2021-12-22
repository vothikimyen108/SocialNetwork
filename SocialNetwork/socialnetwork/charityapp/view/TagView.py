from django.core import paginator
from rest_framework import generics, viewsets, permissions, status
from rest_framework.response import Response

from ..models import Tag
from ..serializers import TagSerializer


class TagView(viewsets.ViewSet, generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    paginator = None

    def get_permissions(self):
        if self.action in ['create']:
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

    # @property
    # def paginator(self):
    #     self._paginator = super(TagView, self).paginator
    #     if self.action == 'the_action_you_want_pagination_disabled':
    #         self._paginator = None
    #     return self._paginator

    # def list(self, request, *args, **kwargs):
    #     try:
    #         tag = Tag.objects.all()
    #         page = self.paginate_queryset(tag)
    #     except Tag.DoesNotExist:
    #         return Response(status=status.HTTP_400_BAD_REQUEST)
    #     if page is not None:
    #         serializer = TagSerializer(page, many=True)
    #         return self.get_paginated_response(serializer.data)
    #     else:
    #         serializer = TagSerializer(tag, many=True)
    #     return Response(serializer.data, status=status.HTTP_200_OK)

