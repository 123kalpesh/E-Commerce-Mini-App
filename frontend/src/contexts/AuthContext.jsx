import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { API } from '../config'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [access, setAccess] = useState(localStorage.getItem('access') || null)
  const [refresh, setRefresh] = useState(localStorage.getItem('refresh') || null)

  useEffect(() => {
    if (access) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${access}`
      // Optionally fetch profile
      axios.get(`${API}/users/me/`).then(res => setUser(res.data)).catch(() => setUser(null))
    }
  }, [access])

  // Global axios error interceptor - shows friendly message and logs details
  useEffect(() => {
    const id = axios.interceptors.response.use(
      r => r,
      err => {
        console.error('API error', err)
        try {
          const message = err.response?.data?.detail || err.response?.data || err.message || 'Request failed'
          showGlobalError(typeof message === 'string' ? message : JSON.stringify(message))
        } catch (e) {
          showGlobalError('Request failed')
        }
        return Promise.reject(err)
      }
    )
    return () => axios.interceptors.response.eject(id)
  }, [])

  const login = async (username, password) => {
    const res = await axios.post(`${API}/users/login/`, { username, password })
    const { access: a, refresh: r } = res.data
    setAccess(a)
    setRefresh(r)
    localStorage.setItem('access', a)
    localStorage.setItem('refresh', r)
    axios.defaults.headers.common['Authorization'] = `Bearer ${a}`
    const me = await axios.get(`${API}/users/me/`)
    setUser(me.data)
  }

  const logout = () => {
    setUser(null)
    setAccess(null)
    setRefresh(null)
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    delete axios.defaults.headers.common['Authorization']
  }

  return (
    <AuthContext.Provider value={{ user, access, refresh, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

function showGlobalError(msg) {
  try {
    let el = document.getElementById('global-api-error')
    if (!el) {
      el = document.createElement('div')
      el.id = 'global-api-error'
      el.style.position = 'fixed'
      el.style.right = '16px'
      el.style.top = '16px'
      el.style.zIndex = 9999
      document.body.appendChild(el)
    }
    el.innerText = msg
    el.style.background = '#fee2e2'
    el.style.border = '1px solid #fecaca'
    el.style.color = '#991b1b'
    el.style.padding = '10px 14px'
    el.style.borderRadius = '8px'
    el.style.boxShadow = '0 6px 18px rgba(16,24,40,0.08)'
    setTimeout(() => { if (el) el.remove() }, 8000)
  } catch (e) {
    // ignore DOM errors
  }
}
