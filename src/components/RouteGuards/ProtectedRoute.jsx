import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/useAuth.js'

// Só deixa passar quem está logado. Os demais vão para o login.
function ProtectedRoute() {
  const { user } = useAuth()

  if (!user) return <Navigate to="/login" replace />

  return <Outlet />
}

export default ProtectedRoute
