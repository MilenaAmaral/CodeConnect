import styles from './Logo.module.css'

function Logo() {
  return (
    <span className={styles.logo}>
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="7" width="9" height="14" rx="4.5" />
        <rect x="13" y="3" width="9" height="14" rx="4.5" />
      </svg>
      <span className={styles.text}>
        <span>code</span>
        <span>connect</span>
      </span>
    </span>
  )
}

export default Logo
