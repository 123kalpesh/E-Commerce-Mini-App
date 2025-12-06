
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { API } from '../config'
import { AuthContext } from './AuthContext'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const { access } = useContext(AuthContext)
  const [cart, setCart] = useState({ items: [] })

  useEffect(() => {
    if (access) fetchCart()
  }, [access])

  const fetchCart = async () => {
    const res = await axios.get(`${API}/cart/`)
    setCart(res.data)
  }

  const addToCart = async (productId, quantity = 1) => {
    const res = await axios.post(`${API}/cart/add/`, { product_id: productId, quantity })
    await fetchCart()
    return res.data
  }

  const updateItem = async (id, quantity) => {
    await axios.patch(`${API}/cart/item/${id}/`, { quantity })
    await fetchCart()
  }

  const removeItem = async id => {
    await axios.delete(`${API}/cart/item/${id}/remove/`)
    await fetchCart()
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateItem, removeItem, fetchCart }}>
      {children}
    </CartContext.Provider>
  )
}
