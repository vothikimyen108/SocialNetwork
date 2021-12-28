from rest_framework import viewsets, generics, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response

from ..models import Report, TypeReport, Post, Comment
from ..serializers import ReportSerializer, TypeReportSerializer


class ReportView(viewsets.ViewSet, generics.ListAPIView):
    queryset = Report.objects.all()
    permission_classes = [permissions.IsAuthenticated, ]

    # serializer_class = ReportSerializer

    # def get_queryset(self):
    #     if self.action.__eq__("create_report"):
    #         return Report.objects.filter(user_report=self.request.user, active=True)
    #     return self.queryset

    def get_serializer_class(self):
        if self.action in ['create_report']:
            return None
        else:
            return ReportSerializer

    @action(methods=["post"], detail=False,
            url_path="create-report/(?P<report_id>[0-9]+)/(?P<type_report_id>[0-9]+)/(?P<object_report>[0-9]+)")
    def create_report(self, request, report_id, type_report_id, object_report):
        try:
            report_id = int(report_id)
            type_report_id = int(type_report_id)
            object_report = int(object_report)

            # if object_report == 1:
            #     if request.user.pk == report_id:
            #         return Response(data='You can not report yourself', status=status.HTTP_400_BAD_REQUEST)
            # if object_report == 2:
            #     try:
            #         post_reported = Post.objects.get(pk=report_id)
            #         if request.user == post_reported.user or request.user == post_reported.comment.user:
            #             return Response(data='You can not report your post', status=status.HTTP_400_BAD_REQUEST)
            #     except Post.DoesNotExist:
            #         return Response(status=status.HTTP_404_NOT_FOUND)
            # if object_report == 3:
            #     try:
            #         comment_reported = Comment.objects.get(pk=report_id)
            #         if request.user == comment_reported.user:
            #             return Response(data='You can not report your comment', status=status.HTTP_400_BAD_REQUEST)
            #     except Comment.DoesNotExist:
            #         return Response(status=status.HTTP_404_NOT_FOUND)
        except:
            return Response(data='Report id, type report id and object report must be a number'
                            , status=status.HTTP_400_BAD_REQUEST)
        try:
            type_report = TypeReport.objects.get(pk=type_report_id)
            report, _ = Report.objects.get_or_create(user_report=request.user, type=type_report,
                                                     reported_id=report_id, object_report=object_report, active=True)
            if not _:
                return Response(data='Your report has been waiting to process', status=status.HTTP_400_BAD_REQUEST)
        except TypeReport.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = ReportSerializer(report, many=False)
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)


class TypeReportView(viewsets.ViewSet, generics.ListAPIView):
    queryset = TypeReport.objects.all()
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = TypeReportSerializer
    pagination_class = None
