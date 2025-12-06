import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'

export default function CartIcon() {
  const { cart } = useContext(CartContext)
  const count = cart?.items?.reduce((s, it) => s + it.quantity, 0) || 0
  return (
    <Link to="/cart" className="relative">
      <span>Cart</span>
      {count > 0 && <span className="ml-1 bg-red-500 text-white rounded-full px-2 text-sm">{count}</span>}
    </Link>
  )
}
