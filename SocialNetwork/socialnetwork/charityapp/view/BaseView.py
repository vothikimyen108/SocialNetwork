from ..models import Post, Tag, ImagePost, Notification, TypeNotification


class BaseView:

    def create_post_base(self, content, tags, images, user):
        post = Post.objects.create(content=content, user=user)

        if tags is not None:
            for tag in tags:
                t, _ = Tag.objects.get_or_create(content=tag.strip())
                post.tags.add(t)
            post.save()
        if images is not None:
            for image in images:
                img = ImagePost.objects.create(image_url=image, post=post)
                img.save()
        return post

    def create_notification(self, type, user_request, post_owner, post):
        if type == 1:
            type_notice = TypeNotification.objects.get(type__icontains='like')
            content_notice = '%s %s liked your post' % (user_request.first_name, user_request.last_name)
            notification, _ = Notification.objects.get_or_create(
                content=content_notice,
                post=post,
                type=type_notice,
                user_to=user_request,
                user_from=post_owner,
            )
            if not _:
                notification.save()
        else:
            type_notice = TypeNotification.objects.get(type__icontains='comment')
            content_notice = '%s %s commented at your post' % (user_request.first_name, user_request.last_name)
            notification = Notification.objects.create(
                content=content_notice,
                post=post,
                type=type_notice,
                user_to=user_request,
                user_from=post_owner,
            )
            notification.save()
        return
