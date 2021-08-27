from django.contrib import admin
from .models import *


# Register your models here.

# Post admin
class ImagePostInlineAdmin(admin.TabularInline):
    model = ImagePost
    fk_name = 'post'  # Này là cho post regular


class TagPostInlineAdmin(admin.TabularInline):
    model = Post.tags.through


class PostAdmin(admin.ModelAdmin):
    list_display = ['id', 'created_date', 'updated_date', 'user', 'active']
    search_fields = ['created_date', 'updated_date', 'user__username']
    list_filter = ['user', 'active']

    model = Post
    inlines = [ImagePostInlineAdmin, TagPostInlineAdmin]


# Đấu giá post admin
class ImageAuctionPostInlineAdmin(admin.TabularInline):
    model = ImageAuctionPost
    fk_name = 'auction_post'  # Này là cho auction post regular


class TagAuctionPostInlineAdmin(admin.TabularInline):
    model = AuctionPost.tags.through


class AuctionPostAdmin(admin.ModelAdmin):
    list_display = ['id', 'product', 'created_date', 'updated_date', 'user', 'active']
    search_fields = ['created_date', 'updated_date', 'user__username']
    list_filter = ['user', 'active']

    model = AuctionPost
    inlines = [ImageAuctionPostInlineAdmin, TagAuctionPostInlineAdmin]


#Tag admin
class TagAdmin(admin.ModelAdmin):
    list_display = ['id', 'content']
    inlines = [TagPostInlineAdmin, TagAuctionPostInlineAdmin]


# PRODUCT ADMIN

class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'price_begin', 'price_end']




# AUCTION ADMIN

class AuctionAdmin(admin.ModelAdmin):
    list_display = ['id', 'auction_post', 'start_date', 'finish_date', 'active']


# USER ADMIN

class UserAdmin(admin.ModelAdmin):
    list_display = ['id', 'username', 'password', 'role', 'is_superuser', 'is_active', 'avatar']


# PAY ADMIN

class PayAdmin(admin.ModelAdmin):
    list_display = ['id', 'auction', 'pay_date', 'payment_term', 'is_pay']


# REPORT ADMIN

class ReportAdmin(admin.ModelAdmin):
    list_display = ['id', 'user_report', 'reported_id', 'type']


# TYPE REPORT ADMIN

class TypeReportAdmin(admin.ModelAdmin):
    list_display = ['id', 'type']


# TYPE NOTIFICATION ADMIN

class TypeNotificationAdmin(admin.ModelAdmin):
    list_display = ['id', 'type']


# Phần thay đổi Admin site
class CharityAppAdminSite(admin.AdminSite):
    site_header = 'CHARITY SOCIAL NETWORK'

admin_site = CharityAppAdminSite('Bài tập lớn đề 6')


# Phần register site admin page
admin_site.register(User, UserAdmin)
admin_site.register(Post, PostAdmin)
admin_site.register(Comment)
admin_site.register(Like)
admin_site.register(Auction, AuctionAdmin)
admin_site.register(AuctionPost, AuctionPostAdmin)
admin_site.register(Tag, TagAdmin)
admin_site.register(Product, ProductAdmin)
admin_site.register(Notification)
admin_site.register(TypeNotification, TypeNotificationAdmin)
admin_site.register(ImagePost)
admin_site.register(ImageAuctionPost)
admin_site.register(Pay)
admin_site.register(Report)
admin_site.register(TypeReport, TypeReportAdmin)
