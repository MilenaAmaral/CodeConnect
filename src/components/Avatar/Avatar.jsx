import styles from './Avatar.module.css'

// Sem fotos de perfil: mostra as iniciais do nome.
function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('')
}

function Avatar({ name }) {
  return (
    <span className={styles.avatar} aria-hidden="true">
      {getInitials(name)}
    </span>
  )
}

export default Avatar
