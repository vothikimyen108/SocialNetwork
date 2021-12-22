from rest_framework import viewsets, generics, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response

from ..serializers import Notification, NotificationViewSerializer


class NotificationViewSet(viewsets.ViewSet, generics.ListAPIView, generics.DestroyAPIView):
    queryset = Notification.objects.all()
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = NotificationViewSerializer

    def get_queryset(self):
        if self.action.__eq__("list"):
            return Notification.objects.filter(user_to=self.request.user,active=True)
        return self.queryset

    @action(methods=["GET"], detail=True, url_path="seen")
    def update_status_notification(self, request, pk, **kwargs):
        instance = self.get_object()
        instance.is_seen = True
        instance.save()
        return Response(status=status.HTTP_200_OK)
