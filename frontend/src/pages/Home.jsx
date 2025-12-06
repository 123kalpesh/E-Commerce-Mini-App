import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { API } from '../config'

export default function Home() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`${API}/products/`)
        setProducts(res.data)
        setError(null)
      } catch (err) {
        console.error(err)
        setError(err.response?.data || err.message || 'Failed to load products')
      }
    }
    fetch()
  }, [])

  return (
    <div>
      <h1 className="page-title">Products</h1>
      {error && (
        <div className="alert error">Error loading products: {typeof error === 'string' ? error : JSON.stringify(error)}</div>
      )}
      <div className="product-grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
