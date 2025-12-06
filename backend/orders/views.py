from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Order, OrderItem
from .serializers import OrderSerializer, OrderItemSerializer
from cart.models import Cart, CartItem


class OrderCreateView(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = OrderSerializer

    def create(self, request, *args, **kwargs):
        cart, _ = Cart.objects.get_or_create(user=request.user)
        items = cart.items.select_related('product')
        if not items.exists():
            return Response({'detail': 'Cart is empty'}, status=status.HTTP_400_BAD_REQUEST)

        subtotal = 0
        order = Order.objects.create(user=request.user)
        for item in items:
            price = item.product.price
            OrderItem.objects.create(order=order, product=item.product, quantity=item.quantity, price=price)
            subtotal += price * item.quantity

        tax = subtotal * 0.1  # 10% dummy tax
        total = subtotal + tax
        order.subtotal = subtotal
        order.tax = tax
        order.total = total
        order.paid = True  # dummy payment success
        order.save()

        # Clear cart
        items.delete()

        return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)


class OrderListView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = OrderSerializer

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user).order_by('-created_at')


class OrderDetailView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

    def get_object(self):
        return self.queryset.get(id=self.kwargs['pk'], user=self.request.user)
