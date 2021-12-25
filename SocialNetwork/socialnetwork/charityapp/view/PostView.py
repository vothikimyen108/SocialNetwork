import cloudinary
from rest_framework import viewsets, status, permissions, generics
from rest_framework.decorators import action
from rest_framework.response import Response

from .BaseView import BaseView
from ..models import Post, Tag, ImagePost, Like, Comment
from ..serializers import PostSerializer, PostCreateSerializer, ImageSerializer, LikeSerializer, CommentSerializer, \
    CommentCreateSerializer


class PostView(viewsets.ViewSet, generics.ListAPIView, BaseView):
    queryset = Post.objects.filter(active=True).order_by('-id')

    def get_permissions(self):
        if self.action in ['get-post']:
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

    def get_serializer_class(self):
        if self.action in ['create_post']:
            return PostCreateSerializer
        if self.action in ['like_or_unlike']:
            return None
        if self.action in ['add_comment']:
            return CommentCreateSerializer
        else:
            return PostSerializer

    @action(methods=['get'], detail=True, url_path="get-post")
    def get_post(self, request, pk):
        try:
            post = self.get_object()
        except Post.DoesNotExist:
            return Response({"Post": "Not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = PostSerializer(post)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(methods=['get'], detail=False, url_path="get-user-post")
    def get_user_post(self, request):
        try:
            post = Post.objects.filter(active=True, user=request.user)
        except Post.DoesNotExist:
            return Response({"Post": "Not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = PostSerializer(post, many=True)
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

    @action(methods=['post'], detail=True, url_path="like-or-unlike")
    def like_or_unlike(self, request, pk):
        try:
            post = self.get_object()
        except Post.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        like, _ = Like.objects.get_or_create(user=request.user, post=post)
        if _:
            like.save()
        else:
            like.delete()
        self.create_notification(1, request.user, post.user, post)
        return Response(data=LikeSerializer(like).data, status=status.HTTP_200_OK)

    @action(methods=['post'], detail=True, url_path="add-comment")
    def add_comment(self, request, pk):
        content = request.data.get('content')
        images = request.FILES.get('images')
        try:
            post = self.get_object()
        except Post.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        self.create_notification(2, request.user, post.user, post)
        comment = Comment.objects.create(user=request.user, post=post, content=content, images=images)
        return Response(data=CommentSerializer(comment).data, status=status.HTTP_200_OK)

    @action(methods=['put'], detail=True, url_path="update-comment/(?P<comment_id>[0-9]+)")
    def update_comment(self, request, pk, comment_id):
        content = request.data.get('content')
        try:
            post = self.get_object()
            comment = Comment.objects.get(user=request.user, post=post, pk=comment_id)
        except Post.DoesNotExist and Comment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        comment.content = content
        comment.save()
        return Response(data=CommentSerializer(comment).data, status=status.HTTP_200_OK)

    @action(methods=['delete'], detail=True, url_path="delete-comment/(?P<comment_id>[0-9]+)")
    def delete_comment(self, request, pk, comment_id):
        try:
            post = self.get_object()
            comment = Comment.objects.get(user=request.user, post=post, pk=comment_id)
        except Post.DoesNotExist and Comment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        comment.delete()
        return Response(data='Delete successfully', status=status.HTTP_200_OK)

    @action(methods=['get'], detail=True, url_path="get-comment/(?P<comment_id>[0-9]+)")
    def get_comment(self, request, pk, comment_id):
        try:
            post = self.get_object()
            comment = Comment.objects.get(user=request.user, post=post, pk=comment_id)
        except Post.DoesNotExist and Comment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = CommentSerializer(comment)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
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
