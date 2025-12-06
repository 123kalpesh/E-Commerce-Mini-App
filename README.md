# 🛍️ **E-Commerce Mini App**

A modern and scalable **full-stack e-commerce web application** built with **Django REST Framework (DRF)** and **React + Tailwind**, featuring **JWT Authentication**, a fully functional **Shopping Cart**, and **Order Management System**.

![banner](https://dummyimage.com/1200x300/121212/ffffff\&text=E-Commerce+Mini+App)

---

# 📑 **Table of Contents**

* [✨ Features](#-features)
* [🛠 Tech Stack](#-tech-stack)
* [📦 Project Architecture](#-project-architecture)
* [🧩 System Design Diagram](#-system-design-diagram)
* [🚀 Getting Started](#-getting-started)
* [⚙️ Backend Setup (Django)](#%EF%B8%8F-backend-setup-django)
* [🎨 Frontend Setup (React)](#-frontend-setup-react)
* [🔐 API Authentication Flow](#-api-authentication-flow)
* [📡 API Endpoints](#-api-endpoints)
* [🧪 Test Accounts](#-test-accounts)
* [📷 Screenshots](#-screenshots)
* [🤝 Contributing](#-contributing)
* [📜 License](#-license)

---

# ✨ **Features**

### 👤 User & Authentication

* Register, login, logout (JWT)
* Profile view & update
* Address management
* Secure routes for authenticated users

### 🛍️ Product Module

* Product listing + pagination
* Category filtering
* Search by name
* Product details
* Admin CRUD (Create, Update, Delete)

### 🛒 Cart System

* Add to cart
* Remove items
* Update quantity
* Auto-calc subtotal & total
* Persistent cart linked to user

### 📦 Orders & Checkout

* Place order from cart
* Order summary page
* Order history
* Dummy payment success
* (Optional) PDF invoice generation

### 🎨 UI/UX (React + Tailwind)

* Clean, modern UI
* Fully responsive
* Optimized API state management
* Protected pages
* Smart token refresh

---

# 🛠 **Tech Stack**

### **Frontend**

* React.js
* Tailwind CSS
* Axios
* Context API / Redux Toolkit

### **Backend**

* Django
* Django REST Framework
* Simple JWT Authentication
* SQLite (Dev)
* PostgreSQL-ready (Production)

### **Tools**

* Postman / Thunder Client
* Git & GitHub
* Vercel (Frontend Deployment)
* Render / Railway (Backend Deployment)

---

# 📦 **Project Architecture**

```
E-Commerce-Mini-App/
│── backend/
│   ├── ecommerce/        # Main Django project
│   ├── users/            # Auth, profiles
│   ├── products/         # Product CRUD & listing
│   ├── cart/             # Cart management
│   ├── orders/           # Order creation & history
│   └── ...
│
│── frontend/
│   ├── src/
│   │   ├── pages/        # React pages
│   │   ├── components/   # UI components
│   │   ├── context/      # State management
│   │   └── api/          # API config
│   └── public/
│
└── README.md
```

---

# 🧩 **System Design Diagram**

```
        ┌───────────────┐       JWT       ┌──────────────┐
        │   React UI    │ <──────────────>│  Django API   │
        └──────┬────────┘                 └──────┬───────┘
               │    REST API Requests             │
               ▼                                   ▼
        ┌───────────────┐                ┌─────────────────────┐
        │  Client State │                │   Database (SQLite)  │
        └───────────────┘                └─────────────────────┘
```

---

# 🚀 **Getting Started**

### Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-mini-app.git
cd ecommerce-mini-app
```

---

# ⚙️ **Backend Setup (Django)**

### 1. Create Virtual Environment

```bash
cd backend
python -m venv env
source env/bin/activate     # macOS/Linux
env\Scripts\activate        # Windows
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Run Migrations

```bash
python manage.py migrate
```

### 4. Run Server

```bash
python manage.py runserver
```

---

# 🎨 **Frontend Setup (React)**

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Run the App

```bash
npm start
```

---

# 🔐 **API Authentication Flow**

```
1. User logs in → Receives access + refresh tokens  
2. Access token added to Authorization header  
3. If access token expires → Automatically refresh  
4. If refresh token fails → User logged out  
```

---

# 📡 **API Endpoints**

### 👤 **Auth**

| Method | Endpoint               | Description     |
| ------ | ---------------------- | --------------- |
| POST   | `/api/users/register/` | Create user     |
| POST   | `/api/users/login/`    | Login & get JWT |
| GET    | `/api/users/profile/`  | Get profile     |
| PUT    | `/api/users/profile/`  | Update profile  |

### 🛍️ **Products**

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| GET    | `/api/products/`      | All products        |
| GET    | `/api/products/<id>/` | Product details     |
| POST   | `/api/products/`      | Add product (Admin) |
| PUT    | `/api/products/<id>/` | Update product      |
| DELETE | `/api/products/<id>/` | Delete product      |

### 🛒 **Cart**

| Method | Endpoint                 | Description     |
| ------ | ------------------------ | --------------- |
| GET    | `/api/cart/`             | Get cart items  |
| POST   | `/api/cart/add/`         | Add item        |
| PUT    | `/api/cart/update/`      | Update quantity |
| DELETE | `/api/cart/remove/<id>/` | Remove item     |

### 📦 **Orders**

| Method | Endpoint              | Description   |
| ------ | --------------------- | ------------- |
| POST   | `/api/orders/create/` | Create order  |
| GET    | `/api/orders/`        | Order history |
| GET    | `/api/orders/<id>/`   | Order details |

---

# 🧪 **Test Accounts**

### User Account

```
email: user@example.com  
password: user123
```

### Admin Account

```
email: admin@example.com  
password: admin123
```

---

# 📷 **Screenshots**

(Add screenshots in your GitHub repo)

```
frontend/public/screenshots/
  home.png
  product-details.png
  cart.png
  checkout.png
  orders.png
```

---

# 🤝 **Contributing**

Contributions are welcome!
Feel free to **open issues** or **submit pull requests**.

---

# 📜 **License**

This project is licensed under the **MIT License**.

---

# ⭐ Final Tip

Add this at the top of your repo:

```
⭐ If you like this project, give it a star — it motivates me to build more!
```

---

If you want, I can also create:
📄 `requirements.txt`
📄 `package.json`
📦 Full Project Code
🧪 Test cases
