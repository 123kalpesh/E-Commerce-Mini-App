import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className="border p-3 rounded">
      <Link to={`/product/${product.id}`}>
        <h3 className="font-semibold">{product.name}</h3>
      </Link>
      <p className="text-sm">${product.price}</p>
    </div>
  )
}
