import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar.jsx'
import PostStats from './PostStats.jsx'
import styles from './PostCard.module.css'

function PostCard({ post }) {
  return (
    <article className={styles.card}>
      <div className={styles.coverWrapper}>
        <img src={post.cover} alt="" className={styles.cover} />
      </div>

      <div className={styles.body}>
        <h2 className={styles.title}>
          {/* O ::after do link cobre o card inteiro, deixando tudo clicável. */}
          <Link to={`/posts/${post.id}`} className={styles.link}>
            {post.title}
          </Link>
        </h2>
        <p className={styles.description}>{post.description}</p>
      </div>

      <footer className={styles.footer}>
        <PostStats likes={post.likes} shares={post.shares} comments={post.comments.length} />
        <span className={styles.author}>
          <Avatar name={post.author.name} />@{post.author.username}
        </span>
      </footer>
    </article>
  )
}

export default PostCard
