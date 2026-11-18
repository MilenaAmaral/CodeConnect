import { Link, useNavigate } from 'react-router'
import AuthLayout from '../../layouts/AuthLayout/AuthLayout.jsx'
import Input from '../../components/Input/Input.jsx'
import Button from '../../components/Button/Button.jsx'
import SocialLogin from '../../components/SocialLogin/SocialLogin.jsx'
import styles from './Login.module.css'

function Login() {
  // useNavigate permite trocar de página pelo código, sem o usuário clicar num link
  const navigate = useNavigate()

  // Ainda sem backend: o navegador valida os campos "required" e,
  // se estiver tudo preenchido, seguimos para o feed.
  function handleSubmit(evento) {
    evento.preventDefault() // impede o comportamento padrão de recarregar a página
    navigate('/feed')
  }

  return (
    <AuthLayout>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <header className={styles.cabecalho}>
          <h1 className={styles.titulo}>Login</h1>
          <p className={styles.subtitulo}>Boas-vindas! Faça seu login.</p>
        </header>

        <div className={styles.campos}>
          {/* autoComplete deixa o navegador e o gerenciador de senhas preencherem os campos */}
          <Input
            label="Email ou usuário"
            name="usuario"
            placeholder="usuario123"
            autoComplete="username"
            required
          />
          <Input
            label="Senha"
            name="senha"
            type="password"
            placeholder="******"
            autoComplete="current-password"
            required
          />

          <div className={styles.opcoes}>
            {/* input dentro do label: clicar no texto também marca a caixa */}
            <label className={styles.lembrar}>
              <input type="checkbox" name="lembrar" />
              Lembrar-me
            </label>
            {/* Não existe tela de recuperação no Figma; vira link quando ela existir */}
            <button type="button" className={styles.esqueci}>
              Esqueci a senha
            </button>
          </div>
        </div>

        <Button type="submit" icone="arrow_forward">
          Login
        </Button>

        <SocialLogin />

        <footer className={styles.rodape}>
          <p>Ainda não tem conta?</p>
          {/* Link troca a página sem recarregar o site inteiro (diferente de <a href>) */}
          <Link to="/cadastro" className={styles.link}>
            Crie seu cadastro!
            <span className="material-icons" aria-hidden="true">
              assignment
            </span>
          </Link>
        </footer>
      </form>
    </AuthLayout>
  )
}

export default Login