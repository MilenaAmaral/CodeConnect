import { clearSession, getSession, loginUser, registerUser, saveSession } from './authService.js'

const userData = { name: 'Milena', email: 'Milena@Email.com', password: '123456' }

describe('authService', () => {
  it('cadastra usuário sem expor a senha e sem guardá-la em texto puro', async () => {
    const user = await registerUser(userData)

    expect(user).toEqual({
      id: expect.any(String),
      name: 'Milena',
      email: 'milena@email.com',
      username: 'milena',
    })
    expect(localStorage.getItem('codeconnect:users')).not.toContain('123456')
  })

  it('impede cadastro com email repetido', async () => {
    await registerUser(userData)

    await expect(registerUser(userData)).rejects.toThrow('Este email já está cadastrado.')
  })

  it('faz login por email ou por usuário', async () => {
    await registerUser(userData)

    await expect(loginUser({ identifier: 'milena@email.com', password: '123456' })).resolves.toBeDefined()
    await expect(loginUser({ identifier: 'milena', password: '123456' })).resolves.toBeDefined()
  })

  it('"Lembrar-me" decide onde a sessão é salva', () => {
    const user = { id: '1', name: 'Milena' }

    saveSession(user, false)
    expect(sessionStorage.getItem('codeconnect:session')).not.toBeNull()
    expect(localStorage.getItem('codeconnect:session')).toBeNull()

    saveSession(user, true)
    expect(localStorage.getItem('codeconnect:session')).not.toBeNull()
    expect(sessionStorage.getItem('codeconnect:session')).toBeNull()

    clearSession()
    expect(getSession()).toBeNull()
  })
})
