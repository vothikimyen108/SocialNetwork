import json

from django.forms import model_to_dict
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import *


class UserSerializer(ModelSerializer):
    # avatar = SerializerMethodField()

    def get_avatar(self, user):
        request = self.context['request']
        if user.avatar:
            name = user.avatar.name
            if name.startswith("static/"):
                path = '/%s' % name
            else:
                path = '/static/%s' % name

            return request.build_absolute_uri(path)

    def create(self, validated_data):
        # avatar = validated_data.pop('avatar', None)
        user = User(**validated_data)
        user.set_password(user.password)
        user.save()
        # user.avatar = avatar
        # user.save()
        return user

    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "avatar",
                  "username", "password", "email", "date_joined", "address", "phone_number" ,"gender","birthday"]
        extra_kwargs = {
            'password': {'write_only': 'true'}
        }


class UpdateUserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "avatar",
                  "email", "address", "phone_number","gender","birthday"]


class CommentSerializer(ModelSerializer):
    user = UserSerializer(many=False)
    notification = serializers.SerializerMethodField('get_notification')

    class Meta:
        model = Comment
        fields = ['id', 'content', 'created_date', 'updated_date', 'user', 'post', 'images', 'notification']

    def get_notification(self, like):
        notify = Notification.objects.filter(type__type__icontains='comment', post=like.post,
                                          user_to=like.user, user_from=like.post.user,
                                             active=True).latest('created_date')

        dict_notice = model_to_dict(notify)
        dict_user_from = model_to_dict(like.post.user)
        if not like.user.avatar:
            dict_user_from['avatar'] = ""
        else:
            dict_user_from['avatar'] = like.user.avatar.url
        del dict_user_from['password']
        del dict_user_from['last_login']
        del dict_user_from['is_superuser']
        del dict_user_from['is_staff']
        del dict_user_from['is_active']
        del dict_user_from['date_joined']
        del dict_user_from['groups']
        del dict_user_from['user_permissions']
        dict_notice['user_from'] = dict_user_from
        return dict_notice


class TagSerializer(ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'content']


class ImageSerializer(ModelSerializer):
    class Meta:
        model = ImagePost
        fields = ['image_url']


class PostSerializer(ModelSerializer, serializers.Serializer):
    user = UserSerializer(many=False)
    tags = TagSerializer(many=True)
    comment = CommentSerializer(many=True)
    total_comment = serializers.SerializerMethodField('get_total_comment')
    total_like = serializers.SerializerMethodField('get_total_like')
    image = ImageSerializer(many=True)

    class Meta:
        model = Post
        fields = ['id', 'content', 'created_date', 'updated_date', 'tags', 'user',
                  'active', 'total_like', 'total_comment', 'image', 'comment']

    def get_total_comment(self, post):
        count = Post.objects.filter(comment__post=post).count()
        return count

    def get_total_like(self, post):
        count = Post.objects.filter(like__post=post).count()
        return count


class ProductSerializer(ModelSerializer):
    user = UserSerializer(many=False)

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price_begin', 'price_end', 'user']


class ProductCreateSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100, allow_blank=False, required=True)
    description = serializers.CharField(max_length=None, allow_blank=True, required=False)
    price = serializers.IntegerField(min_value=0, required=True)


class AuctionPostSerializer(ModelSerializer):
    post = PostSerializer(many=False)
    product = ProductSerializer(many=False)

    class Meta:
        model = AuctionPost
        fields = ['id', 'product', 'post']


class PostCreateSerializer(serializers.Serializer):
    images = serializers.ImageField(max_length=None, allow_empty_file=True, use_url=True)
    content = serializers.CharField(max_length=None, required=False, allow_blank=True)
    tags = serializers.CharField(max_length=50, required=False, allow_null=True, allow_blank=False)


class AuctionPostCreateSerializer(serializers.Serializer):
    images = serializers.ImageField(max_length=None, allow_empty_file=True, use_url=True)
    content = serializers.CharField(max_length=None, required=False, allow_blank=True)
    tags = serializers.CharField(max_length=50, required=False, allow_null=True, allow_blank=False)
    product = serializers.IntegerField(min_value=1)

class UserViewInlineSerializer(UserSerializer):

    class Meta:
        model = UserSerializer.Meta.model
        fields = ["id", "first_name", "last_name", "avatar"]

class TypeNotificationSerializer(ModelSerializer):
    class Meta:
        model = TypeNotification
        fields = ["id","type"]

class NotificationSerializer(ModelSerializer):
    class Meta:
        model = Notification
        fields = ['id', 'content', 'post', 'type', 'user_to', 'user_from', 'is_seen', 'created_date', 'active']

class NotificationViewSerializer(ModelSerializer):
    # user_from_name = serializers.SerializerMethodField('get_user_from')
    user_from = UserViewInlineSerializer()
    user_to = UserViewInlineSerializer()
    type = TypeNotificationSerializer()

    class Meta:
        model = Notification
        fields = NotificationSerializer.Meta.fields


class LikeSerializer(ModelSerializer):
    user = UserSerializer(many=False)
    notification = serializers.SerializerMethodField('get_notification')

    class Meta:
        model = Like
        fields = ['user', 'post', 'created_date', 'notification']

    def get_notification(self, like):
        notify = Notification.objects.get(type__type__icontains='like', post=like.post,
                                          user_to=like.user, user_from=like.post.user, active=True)

        dict_notice = model_to_dict(notify)
        dict_user_from = model_to_dict(like.post.user)
        dict_user_from['avatar'] = like.user.avatar.url
        del dict_user_from['password']
        del dict_user_from['last_login']
        del dict_user_from['is_superuser']
        del dict_user_from['is_staff']
        del dict_user_from['is_active']
        del dict_user_from['date_joined']
        del dict_user_from['groups']
        del dict_user_from['user_permissions']
        dict_notice['user_from'] = dict_user_from
        return dict_notice


class CommentCreateSerializer(serializers.Serializer):
    content = serializers.CharField(allow_blank=True, max_length=None)
    image = serializers.ImageField(max_length=None, allow_empty_file=True, allow_null=True)

