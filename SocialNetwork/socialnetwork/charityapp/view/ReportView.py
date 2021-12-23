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

    @action(methods=["GET"], detail=False, url_path="create-report")
    def create_report(self, request):
        report_id = request.data.get('report_id')
        type_report_id = request.data.get('type_report_id')

        if report_id is None or type_report_id is None:
            return Response('report_id or type_report_id can not none', status=status.HTTP_400_BAD_REQUEST)

        try:
            type_report = TypeReport.objects.get(pk=type_report_id)
            if type_report.type in 'user':
                pass
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
