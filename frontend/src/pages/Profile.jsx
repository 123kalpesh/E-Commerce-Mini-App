import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export default function Profile() {
  const { user } = useContext(AuthContext)
  if (!user) return <div>Please login to see your profile</div>
  return (
    <div>
      <h2>Profile</h2>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
    </div>
  )
}
