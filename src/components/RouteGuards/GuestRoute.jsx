import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/useAuth.js'

// Login e Cadastro: quem já está logado vai direto para o feed.
function GuestRoute() {
  const { user } = useAuth()

  if (user) return <Navigate to="/feed" replace />

  return <Outlet />
}

export default GuestRoute
