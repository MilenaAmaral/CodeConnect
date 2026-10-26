// Autenticação SIMULADA no navegador, sem backend.
// Os usuários ficam no localStorage e a senha é guardada como hash SHA-256,
// nunca em texto puro. Isso NÃO substitui uma autenticação real em servidor:
// qualquer pessoa com acesso ao navegador consegue ver e alterar esses dados.

const USERS_KEY = 'codeconnect:users'
const SESSION_KEY = 'codeconnect:session'

async function hashPassword(password) {
  const data = new TextEncoder().encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

function readUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY)) ?? []
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

// Remove o hash da senha antes de expor o usuário para a interface.
function toPublicUser({ id, name, email, username }) {
  return { id, name, email, username }
}

export async function registerUser({ name, email, password }) {
  const users = readUsers()
  const normalizedEmail = email.trim().toLowerCase()

  if (users.some((user) => user.email === normalizedEmail)) {
    throw new Error('Este email já está cadastrado.')
  }

  const newUser = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: normalizedEmail,
    username: normalizedEmail.split('@')[0],
    passwordHash: await hashPassword(password),
  }

  saveUsers([...users, newUser])
  return toPublicUser(newUser)
}

export async function loginUser({ identifier, password }) {
  const normalizedIdentifier = identifier.trim().toLowerCase()
  const user = readUsers().find(
    (item) => item.email === normalizedIdentifier || item.username === normalizedIdentifier,
  )
  const passwordHash = await hashPassword(password)

  // Mensagem genérica de propósito: não revela se o email existe.
  if (!user || user.passwordHash !== passwordHash) {
    throw new Error('Email/usuário ou senha incorretos.')
  }

  return toPublicUser(user)
}

// "Lembrar-me" marcado: a sessão sobrevive ao fechar o navegador (localStorage).
// Desmarcado: a sessão termina ao fechar a aba (sessionStorage).
export function saveSession(user, remember) {
  clearSession()
  const storage = remember ? localStorage : sessionStorage
  storage.setItem(SESSION_KEY, JSON.stringify(user))
}

export function getSession() {
  const saved = localStorage.getItem(SESSION_KEY) ?? sessionStorage.getItem(SESSION_KEY)
  return saved ? JSON.parse(saved) : null
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY)
  sessionStorage.removeItem(SESSION_KEY)
}
