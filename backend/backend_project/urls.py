from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse


def api_root(request):
    """Simple root view to explain available API endpoints in development."""
    return JsonResponse({
        'message': 'E-commerce API running. Visit /admin or the /api/ endpoints.',
        'api_endpoints': ['/api/users/', '/api/products/', '/api/cart/', '/api/orders/'],
        'note': 'Frontend runs separately (e.g. Vite on http://localhost:5173). This root is intentionally minimal.'
    })


urlpatterns = [
    path('', api_root, name='api-root'),
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')),
    path('api/products/', include('products.urls')),
    path('api/cart/', include('cart.urls')),
    path('api/orders/', include('orders.urls')),
]
