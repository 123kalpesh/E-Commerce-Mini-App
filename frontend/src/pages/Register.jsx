
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../config'

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  const submit = async e => {
    e.preventDefault()
    await axios.post(`${API}/users/register/`, { username, email, password })
    nav('/login')
  }

  return (
    <form onSubmit={submit} className="max-w-md mx-auto">
      <h2 className="text-xl mb-2">Register</h2>
      <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="username" className="w-full mb-2"/>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" className="w-full mb-2"/>
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" type="password" className="w-full mb-2"/>
      <button className="bg-green-600 text-white px-4 py-2">Register</button>
    </form>
  )
}
