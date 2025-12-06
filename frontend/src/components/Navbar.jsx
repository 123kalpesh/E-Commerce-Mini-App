import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import CartIcon from './CartIcon'

export default function Navbar() {
  const { user, logout } = useContext(AuthContext)

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold">E-Shop</Link>
        <div className="flex items-center gap-4">
          <Link to="/">Home</Link>
          {user ? (
            <>
              <Link to="/orders">Orders</Link>
              <Link to="/profile">{user.username}</Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
          <CartIcon />
        </div>
      </div>
    </nav>
  )
}
