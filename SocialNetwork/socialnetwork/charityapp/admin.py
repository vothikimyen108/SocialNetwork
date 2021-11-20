from django import forms
from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import *


# Register your models here.


class ImagePostInlineAdmin(admin.TabularInline):
    model = ImagePost
    # fk_name = 'post'  # Này là cho post regular


# Tag Post Inline Admin

class TagPostInlineAdmin(admin.TabularInline):
    model = Post.tags.through


# POST ADMIN

class PostAdmin(admin.ModelAdmin):
    list_display = ['id', 'created_date', 'updated_date', 'user', 'active']
    search_fields = ['created_date', 'updated_date', 'user__username']
    list_filter = ['user', 'active']

    model = Post
    inlines = [ImagePostInlineAdmin, TagPostInlineAdmin]


# AUCTION POST ADMIN

class AuctionPostAdmin(admin.ModelAdmin):
    list_display = ['id', 'product', 'post']

    # inlines = [ImageAuctionPostInlineAdmin]


# Tag admin
class TagAdmin(admin.ModelAdmin):
    list_display = ['id', 'content']


# PRODUCT ADMIN

class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'price_begin', 'price_end']


# AUCTION ADMIN

class AuctionAdmin(admin.ModelAdmin):
    list_display = ['id', 'auction_post', 'user_join', 'active']


# USER ADMIN


class UserAdmin(admin.ModelAdmin):
    list_display = ['id', 'username', 'password', 'is_superuser', 'avatar', 'is_active']
    readonly_fields = ['avatar_image']
    exclude = ['last_login', 'is_staff', 'date_joined', 'is_superuser']

    def avatar_image(self, user):
        return mark_safe("<img src='{img_url}' width='150' />".format(img_url=user.avatar.url))

    avatar_image.short_description = 'Avatar'


# PAY ADMIN

class PayAdmin(admin.ModelAdmin):
    list_display = ['id', 'auction', 'pay_date', 'payment_term', 'is_pay']


# LIKE ADMIN

class LikeAdmin(admin.ModelAdmin):
    list_display = ['id', 'post', 'user', 'created_date']


# COMMENT ADMIN

class CommentAdmin(admin.ModelAdmin):
    list_display = ['id', 'post', 'user']
    readonly_fields = ['image_cmt']

    def image_cmt(self, cmt):
        return mark_safe("<img src='{img_url}' width='150' />".format(img_url=cmt.images.url))


# REPORT ADMIN

class ReportAdmin(admin.ModelAdmin):
    list_display = ['id', 'reported_id', 'type']


# TYPE REPORT ADMIN

class TypeReportAdmin(admin.ModelAdmin):
    list_display = ['id', 'type']


# NOTIFICATION ADMIN

class NotificationAdmin(admin.ModelAdmin):
    list_display = ['id', 'type', 'user_to', 'user_from', 'is_seen', 'active']


# TYPE NOTIFICATION ADMIN

class TypeNotificationAdmin(admin.ModelAdmin):
    list_display = ['id', 'type']


# IMAGE POST ADMIN

class ImagePostAdmin(admin.ModelAdmin):
    list_display = ['id', 'image', 'post']
    readonly_fields = ['image']

    def image(self, image_post):
        return mark_safe("<img src='{img_url}' width='150' />".format(img_url=image_post.image_url.url))


# class ImageAuctionPostAdmin(admin.ModelAdmin):
#     list_display = ['id', 'image_auction', 'auction_post']
#     readonly_fields = ['image_auction']
#
#     def image_auction(self, image_auction_post):
#         return mark_safe("<img src='{img_url}' width='150' />".format(img_url=image_auction_post.image_url.url))


# Phần thay đổi Admin site
class CharityAppAdminSite(admin.AdminSite):
    site_header = 'CHARITY SOCIAL NETWORK'


admin_site = CharityAppAdminSite('Bài tập lớn đề 6')

# Phần register site admin page
admin_site.register(User, UserAdmin)
admin_site.register(Post, PostAdmin)
admin_site.register(Comment, CommentAdmin)
admin_site.register(Like, LikeAdmin)
admin_site.register(Auction, AuctionAdmin)
admin_site.register(AuctionPost, AuctionPostAdmin)
admin_site.register(Tag, TagAdmin)
admin_site.register(Product, ProductAdmin)
admin_site.register(Notification, NotificationAdmin)
admin_site.register(TypeNotification, TypeNotificationAdmin)
admin_site.register(ImagePost, ImagePostAdmin)
admin_site.register(Pay, PayAdmin)
admin_site.register(Report, ReportAdmin)
admin_site.register(TypeReport, TypeReportAdmin)
