from rest_framework import viewsets, generics, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response

from ..models import Report, TypeReport
from ..serializers import ReportSerializer, TypeReportSerializer


class ReportView(viewsets.ViewSet, generics.ListAPIView):
    queryset = Report.objects.all()
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = ReportSerializer

    # def get_queryset(self):
    #     if self.action.__eq__("create_report"):
    #         return Report.objects.filter(user_report=self.request.user, active=True)
    #     return self.queryset

    @action(methods=["post"], detail=False, url_path="create-report/(?P<report_id>[0-9]+)/(?P<type_report_id>[0-9]+)/(?P<object_report>[0-9]+)")
    def create_report(self, request, report_id, type_report_id, object_report):

        try:
            report_id = int(report_id)
            type_report_id = int(type_report_id)
            object_report = int(object_report)
        except:
            return Response(data='Report id, type report id and object report must be a number', status=status.HTTP_400_BAD_REQUEST)

        try:
            type_report = TypeReport.objects.get(pk=type_report_id)

            report = Report.objects.create(user_report=request.user, type=type_report,
                                           report_id=report_id)
        except TypeReport.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_201_CREATED)


class TypeReportView(viewsets.ViewSet, generics.ListAPIView):
    queryset = TypeReport.objects.all()
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = TypeReportSerializer
    pagination_class = None
