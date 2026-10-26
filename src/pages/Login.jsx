import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button.jsx'
import Checkbox from '../components/Checkbox/Checkbox.jsx'
import SocialLogin from '../components/SocialLogin/SocialLogin.jsx'
import TextField from '../components/TextField/TextField.jsx'
import AuthLayout from '../layouts/AuthLayout/AuthLayout.jsx'
import { hasErrors, validateLogin } from '../utils/validation.js'
import styles from './AuthForm.module.css'

const initialValues = { identifier: '', password: '', remember: false }

function Login() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setValues({ ...values, [name]: type === 'checkbox' ? checked : value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validateLogin(values)
    setErrors(validationErrors)

    if (hasErrors(validationErrors)) return
    // A autenticação será conectada na etapa seguinte (AuthContext).
  }

  return (
    <AuthLayout>
      <header className={styles.header}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.subtitle}>Boas-vindas! Faça seu login.</p>
      </header>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <TextField
          id="identifier"
          name="identifier"
          label="Email ou usuário"
          placeholder="usuario123"
          autoComplete="username"
          value={values.identifier}
          onChange={handleChange}
          error={errors.identifier}
        />
        <TextField
          id="password"
          name="password"
          type="password"
          label="Senha"
          placeholder="******"
          autoComplete="current-password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />

        <div className={styles.options}>
          <Checkbox
            id="remember"
            name="remember"
            label="Lembrar-me"
            checked={values.remember}
            onChange={handleChange}
          />
          <button type="button" className={styles.textButton} disabled title="Em breve">
            Esqueci a senha
          </button>
        </div>

        <Button type="submit">Login →</Button>
      </form>

      <SocialLogin />

      <p className={styles.footer}>
        Ainda não tem conta? <Link to="/cadastro">Crie seu cadastro!</Link>
      </p>
    </AuthLayout>
  )
}

export default Login
