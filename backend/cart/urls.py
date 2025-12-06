from django.urls import path
from . import views

urlpatterns = [
    path('', views.CartView.as_view(), name='cart'),
    path('add/', views.AddToCartView.as_view(), name='cart-add'),
    path('item/<int:pk>/', views.UpdateCartItemView.as_view(), name='cart-item-update'),
    path('item/<int:pk>/remove/', views.RemoveCartItemView.as_view(), name='cart-item-remove'),
]
