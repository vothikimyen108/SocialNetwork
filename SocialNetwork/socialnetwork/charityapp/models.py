import datetime

import cloudinary
import cloudinary_storage.storage
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.db import models


# Create your models here.

class User(AbstractUser):
    avatar = models.ImageField(upload_to='avatar_user/%Y/%m', blank=True)
    address = models.CharField(max_length=255, null=True)
    phone_number = models.CharField(max_length=10, null=True)
    gender = models.BooleanField(default=True)
    birthday = models.DateTimeField(null=True)

    # # def save(self, *args, **kwargs):
    #     self.set_password(self.password)
    #     super(User, self).save(*args, **kwargs)


class Tag(models.Model):
    content = models.CharField(max_length=50, null=False, unique=True)

    def __str__(self):
        return self.content


class ImagePost(models.Model):
    image_url = models.ImageField(upload_to='Post/%Y/%m', blank=False)
    post = models.ForeignKey("Post", related_name='image', on_delete=models.CASCADE, null=True)


class PostBase(models.Model):
    content = models.TextField(null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    tags = models.ManyToManyField(Tag, related_name='post', null=True)
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    active = models.BooleanField(default=True)

    class Meta:
        abstract = True
        ordering = ['-id']


class Post(PostBase):
    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Like(models.Model):
    # is_like = models.BooleanField(default=True)
    post = models.ForeignKey(Post, related_name='like', null=True, blank=False, on_delete=models.SET_NULL)
    user = models.ForeignKey(User, related_name='like', null=True, blank=False, on_delete=models.SET_NULL)
    created_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ['post', 'user']


class Comment(models.Model):
    content = models.TextField(null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, related_name='comment', on_delete=models.CASCADE)
    post = models.ForeignKey(Post, related_name='comment', on_delete=models.CASCADE)
    images = models.ImageField(upload_to='Comment/%Y/%m', blank=True)


class Notification(models.Model):
    content = models.CharField(max_length=255, null=True, blank=True)
    post = models.ForeignKey(Post, related_name='notification', null=True, blank=False, on_delete=models.SET_NULL)
    type = models.ForeignKey("TypeNotification", on_delete=models.SET_NULL, null=True)
    user_to = models.ForeignKey(User, related_name="user_to", on_delete=models.SET_NULL, null=True)
    user_from = models.ForeignKey(User, related_name="user_from", on_delete=models.SET_NULL, null=True)
    is_seen = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=True)

    def clean(self):
        if self.user_to.id == self.user_from.id:
            raise ValidationError({"user_to": "User to have to difference User from"})
        user_to_post = Post.objects.filter(id=self.post.id, user__id=self.user_to.id).first()
        if user_to_post is None and self.type.type == 'Like':
            raise ValidationError({"user_to": "User To dont have this Post"})


class TypeNotification(models.Model):
    type = models.CharField(max_length=50, null=False, unique=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.type


class Auction(models.Model):
    auction_post = models.ForeignKey("AuctionPost", related_name='auction', on_delete=models.SET_NULL, null=True)
    user_join = models.ForeignKey(User, related_name='auction', on_delete=models.SET_NULL, null=True)
    user_win = models.BooleanField(default=False)
    money_auctioned = models.IntegerField(default=0)
    active = models.BooleanField(default=True)

    class Meta:
        unique_together = ['auction_post', 'user_join']

    # def clean(self):
    #     auction_post = Auction.objects.filter(auction_post__id=self.auction_post.id).first()
    #     if auction_post is not None:
    #         raise ValidationError({"auction_post": "Post nay da duoc dau gia !!"})

    def __str__(self):
        return self.auction_post.product.name + ' ' + str(self.start_date)


class AuctionPost(models.Model):
    post = models.OneToOneField(Post, related_name='auction_post', on_delete=models.CASCADE, null=False)
    product = models.OneToOneField("Product", related_name='auction_post', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.product.name


class Product(models.Model):
    name = models.CharField(max_length=100, null=False)
    description = models.TextField(max_length=None, blank=True, null=True)
    price_begin = models.DecimalField(max_digits=17, decimal_places=2)
    price_end = models.DecimalField(max_digits=17, decimal_places=2)
    user = models.ForeignKey(User, related_name='product', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name


class Pay(models.Model):
    is_pay = models.BooleanField(default=True)
    auction = models.OneToOneField(Auction, related_name='pay', on_delete=models.SET_NULL, null=True)
    pay_date = models.DateTimeField(auto_now_add=True)
    payment_term = models.DateTimeField(auto_now_add=True)


class TypeReport(models.Model):
    type = models.CharField(max_length=20, null=False, unique=True)

    def __str__(self):
        return self.type


class Report(models.Model):
    user_report = models.ManyToManyField(User, related_name='report', blank=False)
    type = models.ForeignKey(TypeReport, related_name='report', on_delete=models.SET_NULL, null=True)
    reported_id = models.IntegerField(null=False, default=0)
    created_date = models.DateTimeField(auto_now_add=True)
