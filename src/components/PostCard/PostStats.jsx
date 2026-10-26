import styles from './PostStats.module.css'

const icons = {
  likes: 'M8 7l-5 5 5 5M16 7l5 5-5 5',
  shares: 'M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.6 13.5l6.8 4M15.4 6.5l-6.8 4',
  comments: 'M4 4h16v12H8l-4 4z',
}

// Contadores do post: curtidas (ícone de código), compartilhamentos e comentários.
function PostStats({ likes, shares, comments }) {
  const stats = [
    { key: 'likes', value: likes, label: 'curtidas' },
    { key: 'shares', value: shares, label: 'compartilhamentos' },
    { key: 'comments', value: comments, label: 'comentários' },
  ]

  return (
    <ul className={styles.stats}>
      {stats.map((stat) => (
        <li key={stat.key} className={styles.stat}>
          <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
            <path d={icons[stat.key]} />
          </svg>
          <span>
            {stat.value} <span className="visually-hidden">{stat.label}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}

export default PostStats
