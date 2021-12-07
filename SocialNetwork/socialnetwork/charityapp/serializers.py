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

    class Meta:
        model = Comment
        fields = ['id', 'content', 'created_date', 'updated_date', 'user', 'post', 'images']


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


class LikeSerializer(ModelSerializer):
    user = UserSerializer(many=False)

    class Meta:
        model = Like
        fields = ['user', 'post', 'created_date']


class CommentCreateSerializer(serializers.Serializer):
    content = serializers.CharField(allow_blank=True, max_length=None)
    image = serializers.ImageField(max_length=None, allow_empty_file=True, allow_null=True)
