import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(AuthContext)
  const nav = useNavigate()

  const submit = async e => {
    e.preventDefault()
    await login(username, password)
    nav('/')
  }

  return (
    <form onSubmit={submit} className="max-w-md mx-auto">
      <h2 className="text-xl mb-2">Login</h2>
      <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="username" className="w-full mb-2"/>
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" type="password" className="w-full mb-2"/>
      <button className="bg-blue-600 text-white px-4 py-2">Login</button>
    </form>
  )
}
