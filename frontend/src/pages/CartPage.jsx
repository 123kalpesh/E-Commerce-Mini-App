import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export default function CartPage() {
  const { cart = { items: [] }, updateItem, removeItem } = useContext(CartContext)

  const subtotal = cart?.items?.reduce((s, it) => s + (it.product?.price || 0) * it.quantity, 0) || 0

  return (
    <div className="cart-page">
      <h1 className="page-title">Your Cart</h1>
      {cart.items?.length === 0 && <div className="muted">Your cart is empty</div>}
      <div className="cart-list">
        {cart.items?.map(it => (
          <div key={it.id} className="cart-item">
            <div className="cart-item-main">
              <div className="cart-item-name">{it.product?.name}</div>
              <div className="cart-item-price">${(it.product?.price || 0).toFixed(2)}</div>
            </div>
            <div className="cart-item-actions">
              <input type="number" value={it.quantity} min="1" onChange={e => updateItem(it.id, parseInt(e.target.value) || 1)} className="qty" />
              <button onClick={() => removeItem(it.id)} className="btn danger">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div>Subtotal: <strong>${subtotal.toFixed(2)}</strong></div>
      </div>
    </div>
  )
}
