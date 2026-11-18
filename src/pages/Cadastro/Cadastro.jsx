import { Link, useNavigate } from 'react-router'
import AuthLayout from '../../layouts/AuthLayout/AuthLayout.jsx'
import Input from '../../components/Input/Input.jsx'
import Button from '../../components/Button/Button.jsx'
import SocialLogin from '../../components/SocialLogin/SocialLogin.jsx'
import bannerCadastro from '../../assets/banner-cadastro.jpg'
import styles from '../../layouts/AuthLayout/AuthForm.module.css'

function Cadastro() {
  const navigate = useNavigate()

  // Sem backend: o navegador valida os campos (required, formato de e-mail e
  // tamanho mínimo da senha). Se estiver tudo certo, a pessoa entra no feed.
  function handleSubmit(evento) {
    evento.preventDefault()
    navigate('/feed')
  }

  return (
    <AuthLayout imagem={bannerCadastro}>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <header className={styles.cabecalho}>
          <h1 className={styles.titulo}>Cadastro</h1>
          <p className={styles.subtitulo}>Olá! Preencha seus dados.</p>
        </header>

        <div className={styles.campos}>
          <Input
            label="Nome"
            name="nome"
            placeholder="Nome completo"
            autoComplete="name"
            required
          />
          {/* type="email" faz o navegador exigir um e-mail válido */}
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Digite seu email"
            autoComplete="email"
            required
          />
          {/* new-password avisa o gerenciador de senhas que é uma senha nova */}
          <Input
            label="Senha"
            name="senha"
            type="password"
            placeholder="******"
            autoComplete="new-password"
            minLength={6}
            required
          />

          <div className={styles.opcoes}>
            <label className={styles.lembrar}>
              <input type="checkbox" name="lembrar" />
              Lembrar-me
            </label>
          </div>
        </div>

        <Button type="submit" icone="arrow_forward">
          Cadastrar
        </Button>

        <SocialLogin />

        {/* Duas classes juntas: a base do rodapé + a variação em linha */}
        <footer className={`${styles.rodape} ${styles.rodapeEmLinha}`}>
          <p>Já tem conta?</p>
          <Link to="/login" className={styles.link}>
            Faça seu login!
            <span className="material-icons" aria-hidden="true">
              login
            </span>
          </Link>
        </footer>
      </form>
    </AuthLayout>
  )
}

export default Cadastro