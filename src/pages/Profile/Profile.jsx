import { useAuth } from '../../context/useAuth.js'
import styles from '../InfoPage.module.css'

// O Figma não tem tela de Perfil: esta versão mostra os dados da conta logada.
function Profile() {
  const { user } = useAuth()

  return (
    <section className={styles.card}>
      <h1 className={styles.title}>Perfil</h1>
      <dl className={styles.details}>
        <dt>Nome</dt>
        <dd>{user.name}</dd>
        <dt>Usuário</dt>
        <dd>@{user.username}</dd>
        <dt>Email</dt>
        <dd>{user.email}</dd>
      </dl>
    </section>
  )
}

export default Profile
