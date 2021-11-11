from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import User

class UserSerializer(ModelSerializer):
    #avatar = SerializerMethodField()

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
        #avatar = validated_data.pop('avatar', None)
        user = User(**validated_data)
        user.set_password(user.password)
        user.save()
        # user.avatar = avatar
        # user.save()
        return user

    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "avatar",
                  "username", "password", "email", "date_joined","address", "phone_number"]
        extra_kwargs = {
            'password': {'write_only': 'true'}
        }