import { useAuth } from '../../context/useAuth.js'

// Versão provisória: os posts do feed entram na próxima etapa.
function Feed() {
  const { user } = useAuth()

  return (
    <section>
      <h1>Feed</h1>
      <p>Olá, {user.name}!</p>
    </section>
  )
}

export default Feed
