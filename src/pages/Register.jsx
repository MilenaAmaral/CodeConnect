import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button.jsx'
import Checkbox from '../components/Checkbox/Checkbox.jsx'
import SocialLogin from '../components/SocialLogin/SocialLogin.jsx'
import TextField from '../components/TextField/TextField.jsx'
import AuthLayout from '../layouts/AuthLayout/AuthLayout.jsx'
import { hasErrors, validateRegister } from '../utils/validation.js'
import styles from './AuthForm.module.css'

const initialValues = { name: '', email: '', password: '', remember: false }

function Register() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setValues({ ...values, [name]: type === 'checkbox' ? checked : value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validateRegister(values)
    setErrors(validationErrors)

    if (hasErrors(validationErrors)) return
    // O cadastro será conectado na etapa seguinte (AuthContext).
  }

  return (
    <AuthLayout>
      <header className={styles.header}>
        <h1 className={styles.title}>Cadastro</h1>
        <p className={styles.subtitle}>Olá! Preencha seus dados.</p>
      </header>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <TextField
          id="name"
          name="name"
          label="Nome"
          placeholder="Nome completo"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />
        <TextField
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="Digite seu email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          id="password"
          name="password"
          type="password"
          label="Senha"
          placeholder="******"
          autoComplete="new-password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
        <Checkbox
          id="remember"
          name="remember"
          label="Lembrar-me"
          checked={values.remember}
          onChange={handleChange}
        />

        <Button type="submit">Cadastrar →</Button>
      </form>

      <SocialLogin />

      <p className={styles.footer}>
        Já tem conta? <Link to="/login">Faça seu login!</Link>
      </p>
    </AuthLayout>
  )
}

export default Register
