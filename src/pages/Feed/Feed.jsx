import { useState } from 'react'
import BarraBusca from '../../components/BarraBusca/BarraBusca.jsx'
import CardPost from '../../components/CardPost/CardPost.jsx'
import { buscarPosts, listarPosts } from '../../services/posts.js'
import styles from './Feed.module.css'

// Tela principal: barra de busca e a grade de posts.
function Feed() {
  // O único estado é o texto digitado na busca.
  const [termo, setTermo] = useState('')

  // A lista filtrada é calculada a cada renderização a partir do termo.
  // Não precisa de outro useState: guardar a lista também obrigaria a manter os dois sincronizados.
  const postsVisiveis = buscarPosts(listarPosts(), termo)

  return (
    <section className={styles.feed}>
      {/* Título só para leitores de tela: no visual, a página já se explica */}
      <h1 className="visualmente-oculto">Feed</h1>

      <BarraBusca valor={termo} onChange={setTermo} />

      {/* aria-live anuncia para o leitor de tela quando o número de resultados muda */}
      <p className="visualmente-oculto" aria-live="polite">
        {postsVisiveis.length} posts encontrados
      </p>

      {postsVisiveis.length > 0 ? (
        <div className={styles.grade}>
          {postsVisiveis.map((post) => (
            <CardPost key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className={styles.vazio}>Nenhum post encontrado para “{termo}”.</p>
      )}
    </section>
  )
}

export default Feed
