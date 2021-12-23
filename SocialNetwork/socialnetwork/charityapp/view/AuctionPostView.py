from django.core.exceptions import ValidationError
from rest_framework import generics, viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response

from .BaseView import BaseView
from ..models import AuctionPost, Post, Product
from ..serializers import AuctionPostSerializer, AuctionPostCreateSerializer


class AuctionPostView(viewsets.ViewSet, generics.ListAPIView, BaseView):
    queryset = AuctionPost.objects.all()

    def get_permissions(self):
        if self.action in ['get_auction_post']:
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    def get_serializer_class(self):
        if self.action in ['create_auction_post']:
            return AuctionPostCreateSerializer
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
        content = request.data.get('content')
        tags = request.data.getlist("tags")
        images = request.FILES.getlist('images')
        # product_id = request.data.get('product')
        # try:
        #     product_id = int(product_id)
        # except:
        #     raise ValidationError('Product must be a number')
        # try:
        #     product = Product.objects.get(pk=product_id)
        # except Product.DoesNotExist:
        #     return Response(data='Product does not exist', status=status.HTTP_400_BAD_REQUEST)

        # create product

        post = self.create_post_base(content, tags, images, request.user)
        name = request.data.get('name')
        description = request.data.get('description')
        price_begin = request.data.get('price')
        try:
            price_begin = int(price_begin)
        except:
            return Response(data='Price must be a number', status=status.HTTP_400_BAD_REQUEST)
        product = Product.objects.create(name=name, description=description, price_begin=price_begin,
                                         price_end=price_begin, user=request.user)

        # product_auctioned = AuctionPost.objects.filter(product=product).count()
        # if product_auctioned > 0:
        #     return Response(data='This Product has been auctioned ', status=status.HTTP_400_BAD_REQUEST)


        # product = Product.objects.get(pk=product_id)
        auction_post = AuctionPost.objects.create(post=post, product=product)
        serializer = AuctionPostSerializer(auction_post, many=False)
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)
