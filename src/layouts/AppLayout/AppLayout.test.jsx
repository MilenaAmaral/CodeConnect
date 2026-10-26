import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { saveSession } from '../../services/authService.js'
import { renderApp } from '../../test/renderApp.jsx'

const user = { id: '1', name: 'Milena Amaral', email: 'milena@email.com', username: 'milena' }

describe('AppLayout', () => {
  beforeEach(() => saveSession(user, true))

  it('navega entre as páginas e marca o link ativo', async () => {
    renderApp('/feed')

    expect(screen.getByRole('link', { name: 'Feed' })).toHaveAttribute('aria-current', 'page')

    await userEvent.click(screen.getByRole('link', { name: 'Perfil' }))

    expect(screen.getByRole('heading', { name: 'Perfil' })).toBeInTheDocument()
    expect(screen.getByText('@milena')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Perfil' })).toHaveAttribute('aria-current', 'page')
  })

  it('sai da conta pelo menu', async () => {
    renderApp('/sobre')

    await userEvent.click(screen.getByRole('button', { name: 'Sair' }))

    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()
  })
})
