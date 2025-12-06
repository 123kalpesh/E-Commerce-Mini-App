import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../config'
import { CartContext } from '../contexts/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`${API}/products/${id}/`)
        setProduct(res.data)
        setError(null)
      } catch (err) {
        console.error(err)
        setError(err.response?.data || err.message || 'Failed to load product')
      }
    }
    fetch()
  }, [id])

  if (error) return <div className="alert error">Error: {typeof error === 'string' ? error : JSON.stringify(error)}</div>
  if (!product) return <div>Loading...</div>

  return (
    <div className="product-detail">
      <h1 className="page-title">{product.name}</h1>
      <p className="muted">{product.description}</p>
      <p className="price">${product.price}</p>
      <button onClick={() => addToCart(product.id, 1)} className="btn primary">Add to cart</button>
    </div>
  )
}
