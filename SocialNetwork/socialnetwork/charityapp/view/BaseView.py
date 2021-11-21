from ..models import Post, Tag, ImagePost


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
