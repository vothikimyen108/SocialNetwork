from rest_framework import viewsets, generics, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response

from ..models import Notification
from ..serializers import NotificationSerializer


class NotificationView(viewsets.ViewSet, generics.ListAPIView):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    permission_classes = [permissions.IsAuthenticated, ]
    paginator = None

    @action(methods=['get'], detail=False, url_path="get-notification")
    def get_notification(self, request):
        try:
            query = Notification.objects.filter(user_to=request.user, active=True)
        except Notification.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = NotificationSerializer(query, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
