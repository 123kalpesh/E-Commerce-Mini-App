import axios from 'axios'
import { useEffect, useState } from 'react'
import { API } from '../config'

export default function Orders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios.get(`${API}/orders/`).then(res => setOrders(res.data)).catch(console.error)
  }, [])

  return (
    <div>
      <h2>Your Orders</h2>
      {orders.map(o => (
        <div key={o.id} className="border p-2 mb-2">
          <div>Order #{o.id}</div>
          <div>Total: ${o.total}</div>
        </div>
      ))}
    </div>
  )
}
