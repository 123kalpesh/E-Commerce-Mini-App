import { Route, Routes } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Login from './pages/Login'
import OrderSuccess from './pages/OrderSuccess'
import Orders from './pages/Orders'
import ProductDetail from './pages/ProductDetail'
import Profile from './pages/Profile'
import Register from './pages/Register'

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ErrorBoundary>
          <Navbar />
          <div className="container mx-auto p-4">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success/:id" element={<OrderSuccess />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </ErrorBoundary>
      </CartProvider>
    </AuthProvider>
  )
}
