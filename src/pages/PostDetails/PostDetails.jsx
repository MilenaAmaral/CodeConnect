import { Link, useParams } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar.jsx'
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx'
import PostStats from '../../components/PostCard/PostStats.jsx'
import { getPostById } from '../../services/postService.js'
import styles from './PostDetails.module.css'

function PostDetails() {
  const { postId } = useParams()
  const post = getPostById(postId)

  if (!post) {
    return (
      <section className={styles.notFound}>
        <h1>Post não encontrado</h1>
        <p>O post que você procura não existe ou foi removido.</p>
        <Link to="/feed">Voltar para o feed</Link>
      </section>
    )
  }

  return (
    <article className={styles.details}>
      <Link to="/feed" className={styles.back}>
        ← Voltar para o feed
      </Link>

      <div className={styles.card}>
        <div className={styles.coverWrapper}>
          <img src={post.cover} alt="" className={styles.cover} />
        </div>
        <div className={styles.body}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.description}>{post.description}</p>
        </div>
        <footer className={styles.footer}>
          <PostStats likes={post.likes} shares={post.shares} comments={post.comments.length} />
          <span className={styles.author}>
            <Avatar name={post.author.name} />@{post.author.username}
          </span>
        </footer>
      </div>

      <section className={styles.codeSection} aria-labelledby="code-title">
        <h2 id="code-title" className={styles.sectionTitle}>
          Código:
        </h2>
        <CodeBlock code={post.code} />
      </section>
    </article>
  )
}

export default PostDetails
