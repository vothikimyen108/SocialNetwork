import datetime

from django.core.exceptions import ValidationError
from rest_framework import generics, viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response

from .BaseView import BaseView
from ..models import AuctionPost, Post, Product, Auction
from ..serializers import AuctionPostSerializer, AuctionPostCreateSerializer, AuctionSerializer, AuctionUpdateSerializer


class AuctionPostView(viewsets.ViewSet, generics.ListAPIView, BaseView):
    queryset = AuctionPost.objects.all().order_by('-id')

    def get_permissions(self):
        if self.action in ['get_auction_post']:
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    def get_serializer_class(self):
        if self.action in ['create_auction_post']:
            return AuctionPostCreateSerializer
        if self.action in ['update_auction']:
            return AuctionUpdateSerializer
        else:
            return AuctionPostSerializer

    @action(methods=['get'], detail=True, url_path="get-auction-post")
    def get_auction_post(self, request, pk):
        try:
            auction_post = self.get_object()
            print(auction_post)
        except AuctionPost.DoesNotExist:
            return Response({"Auction Post": "Not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = AuctionPostSerializer(auction_post)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(methods=['post'], detail=False, url_path="create-auction-post")
    def create_auction_post(self, request):
        print(request.data,request.FILES)
        content = request.data.get('content')
        tags = request.data.getlist("tags")
        images = request.FILES.getlist('images')
        name = request.data.get('name')
        description = request.data.get('description')
        price_begin = request.data.get('price')
        end_date = request.data.get('end_date')
        try:
            price_begin = int(price_begin)
        except:
            return Response(data='Price must be a number', status=status.HTTP_400_BAD_REQUEST)
        if not content or len(images) <= 0 or not end_date:
            return Response('content and images and finish date can not be none', status=status.HTTP_400_BAD_REQUEST)
        if not name or int(price_begin) <= 0 or not price_begin:
            return Response('Product name and price can not be none', status=status.HTTP_400_BAD_REQUEST)
        if datetime.datetime.strptime(end_date, '%Y-%m-%d').date() <= datetime.date.today():
            return Response('Finish date can not be less than now', status=status.HTTP_400_BAD_REQUEST)

        # create product
        post = self.create_post_base(content, tags, images, request.user)
        product = Product.objects.create(name=name, description=description, price_begin=price_begin,
                                         price_end=price_begin, user=request.user)

        # product_id = request.data.get('product')
        # try:
        #     product_id = int(product_id)
        # except:
        #     raise ValidationError('Product must be a number')
        # try:
        #     product = Product.objects.get(pk=product_id)
        # except Product.DoesNotExist:
        #     return Response(data='Product does not exist', status=status.HTTP_400_BAD_REQUEST)
        # product_auctioned = AuctionPost.objects.filter(product=product).count()
        # if product_auctioned > 0:
        #     return Response(data='This Product has been auctioned ', status=status.HTTP_400_BAD_REQUEST)
        # product = Product.objects.get(pk=product_id)

        auction_post = AuctionPost.objects.create(post=post, product=product, end_date=end_date)
        serializer = AuctionPostSerializer(auction_post, many=False)
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)

    # @action(methods=['put'], detail=False, url_path="update-auction/(?P<post_id>[0-9]+)/(?P<auction_id>[0-9]+)/(?P<user_win>[0-9]+)")
    @action(methods=['put'], detail=False, url_path="update-auction/(?P<post_id>[0-9]+)/(?P<user_win>[0-9]+)")
    def update_auction(self, request, post_id, user_win):
        money_auction = request.data.get("money_auction")
        try:
            money_auction = int(money_auction)
            user_win = int(user_win)
            # auction_id = int(auction_id)
            post_id = int(post_id)
            if money_auction < 0:
                return Response(data='Price auction must be greater than 0', status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response(data='Price auction, user id, auction id and post id must be a number', status=status.HTTP_400_BAD_REQUEST)
        try:
            post = Post.objects.get(pk=post_id)
            auction_post = AuctionPost.objects.get(post=post)
        except:
            return Response(data='Auction or auction post does not exist', status=status.HTTP_400_BAD_REQUEST)
        auction, _ = Auction.objects.get_or_create(auction_post=auction_post,
                                                   user_join=request.user)
        if not _:
            if money_auction < auction.money_auctioned:
                return Response('Price auction can not be less than now')
            auction.money_auctioned = money_auction
            if user_win == 1:
                auction.user_win = True
                auction.active = False
        else:
            auction.money_auctioned = money_auction
        auction.save()
        serializer = AuctionSerializer(auction, many=False)
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)
