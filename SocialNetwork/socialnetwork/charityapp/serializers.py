from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import User

class UserSerializer(ModelSerializer):
    avatar = SerializerMethodField()

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(user.password)
        user.save()
        return user

    def get_avatar(self, user):
        request = self.context['request']
        if user.avatar:
            name = user.avatar.name
            if name.startswith("static/"):
                path = '/%s' % name
            else:
                path = '/static/%s' % name

            return request.build_absolute_uri(path)

    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "avatar",
                  "username", "password", "email", "date_joined"]
        extra_kwargs = {
            'password': {'write_only': 'true'}
        }