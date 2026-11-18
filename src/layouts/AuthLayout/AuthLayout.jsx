import Logo from '../../components/Logo/Logo.jsx'
import styles from './AuthLayout.module.css'

/*
  Moldura compartilhada por Login e Cadastro.
  - imagem: foto exibida ao lado do formulário (cada tela usa uma diferente)
  - children: o formulário que a página coloca dentro do layout
*/
function AuthLayout({ imagem, children }) {
  return (
    <main className={styles.pagina}>
      <section className={styles.card}>
        <div className={styles.banner}>
          {/* alt vazio: a imagem é decorativa e o leitor de tela pode ignorá-la */}
          <img src={imagem} alt="" className={styles.imagem} />
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