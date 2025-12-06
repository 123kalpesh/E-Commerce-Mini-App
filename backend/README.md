# Backend (Django + DRF)

This backend implements REST APIs for users, products, cart and orders. JWT auth (access + refresh) is provided by djangorestframework-simplejwt.

Setup

1. Create virtualenv and install:

```cmd
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

2. Migrate and create superuser:

```cmd
python manage.py migrate
python manage.py createsuperuser
python manage.py seed_products
```

Run server:

```cmd
python manage.py runserver
```

API Endpoints (base: /api)

- Users:
  - POST /api/users/register/ — register (username, email, password)
  - POST /api/users/login/ — obtain tokens (username, password) -> { access, refresh }
  - POST /api/users/token/refresh/ — refresh access
  - GET/PATCH /api/users/me/ — profile (authenticated)

- Products:
  - GET /api/products/ — list all products; supports search by ?search=term and filter by ?category=<id>
  - GET /api/products/<id>/ — product detail
  - POST/PUT/DELETE /api/products/ — admin CRUD
  - GET /api/products/categories/ — list categories

- Cart (authenticated):
  - GET /api/cart/ — get current user's cart
  - POST /api/cart/add/ — add to cart { product_id, quantity }
  - PATCH /api/cart/item/<id>/ — update quantity
  - DELETE /api/cart/item/<id>/remove/ — remove item

- Orders (authenticated):
  - POST /api/orders/create/ — create order from cart (dummy payment)
  - GET /api/orders/ — list user orders
  - GET /api/orders/<id>/ — order detail

Invoice

The API returns order data (JSON) when an order is created or fetched. To add PDF invoice generation:

1. Install reportlab or WeasyPrint.
2. Create an endpoint that renders the order into HTML and converts it to PDF, returning application/pdf.
