import Logo from '../../components/Logo/Logo.jsx'
import Button from '../../components/Button/Button.jsx'
import Input from '../../components/Input/Input.jsx'

// Vitrine provisória dos componentes base (substituída na etapa 5)
function Login() {
  return (
    <main style={{ maxWidth: 320, margin: '40px auto', display: 'grid', gap: 16 }}>
      <Logo />
      <Input label="Email ou usuário" placeholder="usuario123" />
      <Input label="Senha" type="password" placeholder="******" />
      <Button icone="arrow_forward">Login</Button>
      <Button variante="secundario">Descartar</Button>
    </main>
  )
}

export default Login