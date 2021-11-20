import cloudinary
from rest_framework import viewsets, status, permissions, generics
from rest_framework.decorators import action
from rest_framework.response import Response

from .BaseView import BaseView
from ..models import Post, Tag, ImagePost
from ..serializers import PostSerializer, PostCreateSerializer, ImageSerializer


class PostView(viewsets.ViewSet, generics.ListAPIView, BaseView):
    queryset = Post.objects.filter(active=True)

    def get_permissions(self):
        if self.action in ['get_post']:
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    def get_serializer_class(self):
        if self.action in ['create_post']:
            return PostCreateSerializer
        else:
            return PostSerializer

    @action(methods=['get'], detail=True, url_path="get_post")
    def get_post(self, request, pk):
        try:
            post = self.get_object()
        except Post.DoesNotExist:
            return Response({"Post": "Not found"}, status=status.HTTP_404_NOT_FOUND)
        print("")
        i = ImagePost.objects.get(pk=1)
        print(i.image_url)
        serializer = PostSerializer(post)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(methods=['post'], detail=False, url_path="create-post")
    def create_post(self, request):
        content = request.data.get('content')
        tags = request.data.getlist("tags")
        images = request.FILES.getlist('images')
        post = self.create_post_base(content, tags, images, request.user)
        serializer = PostSerializer(post, many=False)
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)

    @action(methods=['put'], detail=True, url_path="update-post")
    def update_post(self, request, pk):
        content = request.data.get('content')
        try:
            post = Post.objects.get(pk=pk, user=request.user)
        except Post.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        post.content = content
        serializer = PostSerializer(post, many=False)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    @action(methods=['delete'], detail=True, url_path="delete-post")
    def delete_post(self, request, pk):
        try:
            post = Post.objects.get(pk=pk, user=request.user)
        except Post.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        post.delete()
        return Response(data='Delete successfully', status=status.HTTP_200_OK)

# PHẦN TEST

class ImageView(viewsets.ViewSet, generics.CreateAPIView):
    queryset = ImagePost.objects.all()
    serializer_class = ImageSerializer

    def create(self, request, *args, **kwargs):
        s = request.FILES.getlist('image_url')
        p = request.data.get('post')
        pp = Post.objects.get(pk=p)
        print(request.FILES.getlist('image_url'))
        # img = ImagePost.objects.create(image_url=s, post=pp)
        # print(img.image_url)
        return Response(status=status.HTTP_200_OK)

