import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from '../App.jsx'

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('Página de Login', () => {
  it('mostra erros ao enviar o formulário vazio', async () => {
    renderAt('/login')

    await userEvent.click(screen.getByRole('button', { name: /login/i }))

    expect(screen.getByText('Informe seu email ou usuário.')).toBeInTheDocument()
    expect(screen.getByText('Informe a senha.')).toBeInTheDocument()
  })

  it('navega para o cadastro pelo link', async () => {
    renderAt('/login')

    await userEvent.click(screen.getByRole('link', { name: 'Crie seu cadastro!' }))

    expect(screen.getByRole('heading', { name: 'Cadastro' })).toBeInTheDocument()
  })
})

describe('Página de Cadastro', () => {
  it('valida o formato do email', async () => {
    renderAt('/cadastro')

    await userEvent.type(screen.getByLabelText('Nome'), 'Milena')
    await userEvent.type(screen.getByLabelText('Email'), 'milena@')
    await userEvent.type(screen.getByLabelText('Senha'), '123456')
    await userEvent.click(screen.getByRole('button', { name: /cadastrar/i }))

    expect(screen.getByText('Informe um email válido.')).toBeInTheDocument()
  })
})
