# E-Commerce Mini App (Django + DRF + React + Tailwind)

This repository contains a full-stack e-commerce mini app with:

- Backend: Django + Django REST Framework + Simple JWT
- Frontend: React + Tailwind CSS
- Database: SQLite (development), PostgreSQL-ready configuration

Folders
- backend/: Django project and apps (users, products, cart, orders)
- frontend/: React app (pages, components, contexts)

Quick start (backend)

1. Create a Python virtualenv and install dependencies:

```cmd
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

2. Run migrations and seed sample data:

```cmd
python manage.py migrate
python manage.py createsuperuser
python manage.py seed_products
```

3. Run server:

```cmd
python manage.py runserver
```

Quick start (frontend)

Open the `frontend/` folder. Install and run the React dev server (instructions provided in `frontend/README.md`).

See `backend/` and `frontend/` READMEs for detailed API docs and usage.
