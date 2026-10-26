import { useState } from 'react'
import PostCard from '../../components/PostCard/PostCard.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import { getPosts, searchPosts } from '../../services/postService.js'
import styles from './Feed.module.css'

function Feed() {
  const [query, setQuery] = useState('')
  // Valor derivado: a lista filtrada é calculada a cada renderização, sem estado extra.
  const visiblePosts = searchPosts(getPosts(), query)

  return (
    <section className={styles.feed}>
      <h1 className="visually-hidden">Feed</h1>
      <SearchBar value={query} onChange={setQuery} />

      <p className="visually-hidden" aria-live="polite">
        {visiblePosts.length} posts encontrados
      </p>

      {visiblePosts.length > 0 ? (
        <div className={styles.grid}>
          {visiblePosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>Nenhum post encontrado para “{query}”.</p>
      )}
    </section>
  )
}

export default Feed
