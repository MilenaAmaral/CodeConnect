import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderizarApp } from '../../test/renderizarApp.jsx'

describe('AppLayout', () => {
  it('marca o item do menu da página atual', () => {
    renderizarApp('/feed')

    // aria-current="page" é como o NavLink avisa o leitor de tela qual é a página atual
    expect(screen.getByRole('link', { name: /feed/i })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: /perfil/i })).not.toHaveAttribute('aria-current')
  })

  it('navega entre as páginas pelo menu', async () => {
    renderizarApp('/feed')

    await userEvent.click(screen.getByRole('link', { name: /sobre nós/i }))

    expect(screen.getByRole('link', { name: /sobre nós/i })).toHaveAttribute('aria-current', 'page')
  })

  it('abre a página de publicar pelo botão Publicar', async () => {
    renderizarApp('/feed')

    await userEvent.click(screen.getByRole('link', { name: 'Publicar' }))

    expect(screen.getByRole('heading', { name: /publicar/i })).toBeInTheDocument()
  })

  it('volta para o login ao clicar em Sair', async () => {
    renderizarApp('/perfil')

    await userEvent.click(screen.getByRole('button', { name: /sair/i }))

    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()
  })
})
