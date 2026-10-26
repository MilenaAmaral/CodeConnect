import bannerImage from '../../assets/auth-banner.svg'
import Logo from '../../components/Logo/Logo.jsx'
import styles from './AuthLayout.module.css'

// Estrutura comum às telas de Login e Cadastro: imagem com logo + área do formulário.
function AuthLayout({ children }) {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <div className={styles.banner}>
          <img src={bannerImage} alt="" className={styles.bannerImage} />
          <div className={styles.logo}>
            <Logo />
          </div>
        </div>
        <section className={styles.content}>{children}</section>
      </div>
    </main>
  )
}

export default AuthLayout
