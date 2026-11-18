import Logo from '../../components/Logo/Logo.jsx'
import banner from '../../assets/banner-login.jpg'
import styles from './AuthLayout.module.css'

/*
  Moldura compartilhada por Login e Cadastro.
  "children" é tudo o que a página colocar entre <AuthLayout> e </AuthLayout>;
  aqui, o formulário de cada tela.
*/
function AuthLayout({ children }) {
  return (
    <main className={styles.pagina}>
      <section className={styles.card}>
        <div className={styles.banner}>
          {/* alt vazio: a imagem é decorativa e o leitor de tela pode ignorá-la */}
          <img src={banner} alt="" className={styles.imagem} />
          <div className={styles.logo}>
            <Logo />
          </div>
        </div>

        <div className={styles.conteudo}>{children}</div>
      </section>
    </main>
  )
}

export default AuthLayout