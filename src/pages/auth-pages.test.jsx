import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { registerUser } from '../services/authService.js'
import { renderApp } from '../test/renderApp.jsx'

describe('Página de Login', () => {
  it('mostra erros ao enviar o formulário vazio', async () => {
    renderApp('/login')

    await userEvent.click(screen.getByRole('button', { name: /login/i }))

    expect(screen.getByText('Informe seu email ou usuário.')).toBeInTheDocument()
    expect(screen.getByText('Informe a senha.')).toBeInTheDocument()
  })

  it('navega para o cadastro pelo link', async () => {
    renderApp('/login')

    await userEvent.click(screen.getByRole('link', { name: 'Crie seu cadastro!' }))

    expect(screen.getByRole('heading', { name: 'Cadastro' })).toBeInTheDocument()
  })

  it('mostra erro com senha incorreta', async () => {
    await registerUser({ name: 'Milena', email: 'milena@email.com', password: '123456' })
    renderApp('/login')

    await userEvent.type(screen.getByLabelText('Email ou usuário'), 'milena')
    await userEvent.type(screen.getByLabelText('Senha'), 'errada1')
    await userEvent.click(screen.getByRole('button', { name: /login/i }))

    expect(await screen.findByText('Email/usuário ou senha incorretos.')).toBeInTheDocument()
  })
})

describe('Página de Cadastro', () => {
  it('valida o formato do email', async () => {
    renderApp('/cadastro')

    await userEvent.type(screen.getByLabelText('Nome'), 'Milena')
    await userEvent.type(screen.getByLabelText('Email'), 'milena@')
    await userEvent.type(screen.getByLabelText('Senha'), '123456')
    await userEvent.click(screen.getByRole('button', { name: /cadastrar/i }))

    expect(screen.getByText('Informe um email válido.')).toBeInTheDocument()
  })
})

describe('Fluxo completo de autenticação', () => {
  it('cadastra, sai e entra novamente', async () => {
    renderApp('/cadastro')

    await userEvent.type(screen.getByLabelText('Nome'), 'Milena Amaral')
    await userEvent.type(screen.getByLabelText('Email'), 'milena@email.com')
    await userEvent.type(screen.getByLabelText('Senha'), '123456')
    await userEvent.click(screen.getByRole('button', { name: /cadastrar/i }))

    expect(await screen.findByText('Olá, Milena Amaral!')).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Sair' }))
    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()

    await userEvent.type(screen.getByLabelText('Email ou usuário'), 'milena@email.com')
    await userEvent.type(screen.getByLabelText('Senha'), '123456')
    await userEvent.click(screen.getByRole('button', { name: /login/i }))

    expect(await screen.findByRole('heading', { name: 'Feed' })).toBeInTheDocument()
  })
})
