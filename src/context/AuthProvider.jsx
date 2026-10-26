import { useState } from 'react'
import {
  clearSession,
  getSession,
  loginUser,
  registerUser,
  saveSession,
} from '../services/authService.js'
import { AuthContext } from './AuthContext.js'

// Guarda o usuário logado e disponibiliza login, cadastro e logout para toda a aplicação.
function AuthProvider({ children }) {
  // Função no useState: lê a sessão salva só na primeira renderização.
  const [user, setUser] = useState(() => getSession())

  async function login({ identifier, password, remember }) {
    const loggedUser = await loginUser({ identifier, password })
    saveSession(loggedUser, remember)
    setUser(loggedUser)
  }

  async function register({ name, email, password, remember }) {
    const newUser = await registerUser({ name, email, password })
    saveSession(newUser, remember)
    setUser(newUser)
  }

  function logout() {
    clearSession()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
