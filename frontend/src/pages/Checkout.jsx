import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../config'
import { AuthContext } from '../contexts/AuthContext'

export default function Checkout() {
  const { access } = useContext(AuthContext)
  const nav = useNavigate()

  const submit = async () => {
    // Dummy payment flow: call order create endpoint
    const res = await axios.post(`${API}/orders/create/`, {})
    nav(`/order-success/${res.data.id}`)
  }

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={submit} className="bg-green-600 text-white px-4 py-2">Pay (dummy)</button>
    </div>
  )
}
