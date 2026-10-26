// Funções puras de validação: recebem os valores e devolvem um objeto de erros.
// Um objeto vazio significa que o formulário é válido.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const MIN_PASSWORD_LENGTH = 6

function validatePassword(password) {
  if (!password) return 'Informe a senha.'
  if (password.length < MIN_PASSWORD_LENGTH) {
    return `A senha deve ter pelo menos ${MIN_PASSWORD_LENGTH} caracteres.`
  }
  return null
}

export function validateLogin({ identifier, password }) {
  const errors = {}

  if (!identifier.trim()) errors.identifier = 'Informe seu email ou usuário.'

  const passwordError = validatePassword(password)
  if (passwordError) errors.password = passwordError

  return errors
}

export function validateRegister({ name, email, password }) {
  const errors = {}

  if (!name.trim()) errors.name = 'Informe seu nome.'

  if (!email.trim()) {
    errors.email = 'Informe seu email.'
  } else if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = 'Informe um email válido.'
  }

  const passwordError = validatePassword(password)
  if (passwordError) errors.password = passwordError

  return errors
}

export function hasErrors(errors) {
  return Object.keys(errors).length > 0
}
