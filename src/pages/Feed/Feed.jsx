import Button from '../../components/Button/Button.jsx'
import { useAuth } from '../../context/useAuth.js'

// Versão provisória: o layout e os posts do feed entram nas próximas etapas.
function Feed() {
  const { user, logout } = useAuth()

  return (
    <main>
      <h1>Feed</h1>
      <p>Olá, {user.name}!</p>
      <Button variant="outline" onClick={logout}>
        Sair
      </Button>
    </main>
  )
}

export default Feed
