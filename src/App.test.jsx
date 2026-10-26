import { screen } from '@testing-library/react'
import { saveSession } from './services/authService.js'
import { renderApp } from './test/renderApp.jsx'

describe('Rotas', () => {
  it('redireciona visitante sem login para a página de login', () => {
    renderApp('/feed')

    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()
  })

  it('leva usuário logado direto ao feed ao abrir o login', () => {
    saveSession({ id: '1', name: 'Milena', email: 'milena@email.com', username: 'milena' }, true)

    renderApp('/login')

    expect(screen.getByRole('heading', { name: 'Feed' })).toBeInTheDocument()
  })
})
