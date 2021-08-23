from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.

class User(AbstractUser):
    avatar = models.CharField(max_length=500, null=False)
    address = models.CharField(max_length=255, null=True)
    phone_number = models.CharField(max_length=10, null=True)
    ADMIN = 1
    USER = 0
    USER_TYPE_CHOICES = (
          (ADMIN, 'ADMIN'),
          (USER, 'USER')
      )

    role = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES, default=USER)


class Tag(models.Model):
    content = models.CharField(max_length=50, null=False, unique=True)

    def __str__(self):
        return self.content


class Image(models.Model):
    image_url = models.CharField(max_length=500, null=False)
    post = models.ForeignKey("Post", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.image_url


class PostBase(models.Model):
    content = models.TextField(null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    tags = models.ManyToManyField(Tag, null=True)
    active = models.BooleanField(default=True)

    class Meta:
        abstract = True
        ordering = ['-id']


class Post(PostBase):
    class Meta:
        ordering = ['id']


class Like(models.Model):
    is_like = models.BooleanField(default=True)
    post = models.OneToOneField(Post, null=True, blank=False, on_delete=models.SET_NULL)
    user = models.OneToOneField(User, null=True, blank=False, on_delete=models.SET_NULL)


class Comment(models.Model):
    content = models.TextField(null=True, blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    images = models.ForeignKey(Image, on_delete=models.CASCADE)


class Notification(models.Model):
    content = models.CharField(max_length=255, null=True, blank=True)
    type = models.ForeignKey("TypeNotification", on_delete=models.SET_NULL, null=True)
    user_to = models.ForeignKey(User, related_name="user_to", on_delete=models.SET_NULL, null=True)
    user_from = models.ForeignKey(User, related_name="user_from", on_delete=models.SET_NULL, null=True)
    is_seen = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=True)


class TypeNotification(models.Model):
    type = models.CharField(max_length=50, null=False, unique=True)

    class Meta:
        ordering = ['id']


class Auction(models.Model):
    auctionpost = models.OneToOneField("AuctionPost", on_delete=models.SET_NULL, null=True)
    user_join = models.ManyToManyField(User, null=False)
    user_win = models.BooleanField(default=False)
    active = models.BooleanField(default=True)


class AuctionPost(PostBase):
    status = models.BooleanField(default=True)
    product = models.OneToOneField("Product", on_delete=models.SET_NULL, null=True)


class Product(models.Model):
    name = models.CharField(max_length=100, null=False)
    price_begin = models.DecimalField(max_digits=17, decimal_places=2)
    price_end = models.DecimalField(max_digits=17, decimal_places=2)


class Pay(models.Model):
    is_pay = models.BooleanField(default=True)
    auction = models.OneToOneField(Auction, on_delete=models.SET_NULL, null=True)
    pay_date = models.DateTimeField(auto_now_add=True)
    payment_term = models.DateTimeField(auto_now_add=True)


class TypeReport(models.Model):
    type = models.CharField(max_length=20, null=False, unique=True)


class Report(models.Model):
    user_report = models.ManyToManyField(User, blank=False)
    type = models.ForeignKey(TypeReport, on_delete=models.SET_NULL, null=True)
    reported_id = models.IntegerField(null=False, default=0)
