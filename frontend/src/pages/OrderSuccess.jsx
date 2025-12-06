import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../config'

export default function OrderSuccess() {
  const { id } = useParams()
  const [order, setOrder] = useState(null)

  useEffect(() => {
    axios.get(`${API}/orders/${id}/`).then(res => setOrder(res.data)).catch(console.error)
  }, [id])

  if (!order) return <div>Loading...</div>

  return (
    <div>
      <h2>Order #{order.id} Complete</h2>
      <div>Total: ${order.total}</div>
    </div>
  )
}
