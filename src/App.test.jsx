import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderizarApp } from './test/renderizarApp.jsx'

describe('Rotas', () => {
  it('redireciona a página inicial para o login', () => {
    renderizarApp('/')

    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()
  })

  it('redireciona endereços inexistentes para o login', () => {
    renderizarApp('/pagina-que-nao-existe')

    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()
  })

  it('vai do login para o cadastro pelo link', async () => {
    renderizarApp('/login')

    await userEvent.click(screen.getByRole('link', { name: /crie seu cadastro/i }))

    expect(screen.getByRole('heading', { name: 'Cadastro' })).toBeInTheDocument()
  })

  it('entra no feed ao enviar o login preenchido', async () => {
    renderizarApp('/login')

    await userEvent.type(screen.getByLabelText('Email ou usuário'), 'milena')
    await userEvent.type(screen.getByLabelText('Senha'), '123456')
    await userEvent.click(screen.getByRole('button', { name: /login/i }))

    expect(screen.getByRole('heading', { name: 'Feed' })).toBeInTheDocument()
  })
})
