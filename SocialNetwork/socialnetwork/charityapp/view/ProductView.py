from rest_framework import viewsets, generics, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response

from ..models import Product
from ..serializers import ProductSerializer, ProductCreateSerializer


class ProductView(viewsets.ViewSet, generics.ListAPIView):
    queryset = Product.objects.all()

    def get_permissions(self):
        if self.action in ['get_post']:
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    def get_serializer_class(self):
        if self.action in ['create_product']:
            return ProductCreateSerializer
        else:
            return ProductSerializer

    @action(methods=['post'], detail=False, url_path="create-product")
    def create_product(self, request):
        name = request.data.get('name')
        description = request.data.get('description')
        price_begin = request.data.get('price')
        try:
            price_begin = int(price_begin)
        except:
            return Response(data='Price must be a number', status=status.HTTP_400_BAD_REQUEST)
        product = Product.objects.create(name=name, description=description, price_begin=price_begin,
                                         price_end=price_begin, user=request.user)
        serializer = ProductSerializer(product, many=False)
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)

    @action(methods=['put'], detail=True, url_path="update-info-product")
    def update_info_product(self, request, pk):
        name = request.data.get('name')
        description = request.data.get('description')
        price_begin = request.data.get('price_begin')
        price_end = request.data.get('price_end')
        type = request.data.get('type')

        try:
            if price_begin is not None:
                price_begin = int(price_begin)
            if price_end is not None:
                price_end = int(price_end)
            type = int(type)
        except:
            return Response(data='Price and type must be a number', status=status.HTTP_400_BAD_REQUEST)
        product = Product.objects.get(pk=pk, user=request.user)

        if type == 1:
            product.name = name
            product.description = description
            product.price_begin = price_begin
        if type == 2:
            if price_end < product.price_begin:
                return Response(data='Price end must be greater than price begin', status=status.HTTP_400_BAD_REQUEST)
            product.price_end = price_end

        serializer = ProductSerializer(product, many=False)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    @action(methods=['delete'], detail=True, url_path="delete-product")
    def delete_product(self, request, pk):
        product = Product.objects.get(pk=pk, user=request.user)
        product.delete()
        return Response(data='Delete successfully', status=status.HTTP_200_OK)

    @action(methods=['get'], detail=False, url_path="get-product-to-auction")
    def get_product_to_auction(self, request):
        product = Product.objects.filter(auction_post__isnull=True, user=request.user)
        serializer = ProductSerializer(product, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


