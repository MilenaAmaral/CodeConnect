import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { saveSession } from '../../services/authService.js'
import { renderApp } from '../../test/renderApp.jsx'

describe('PostDetails', () => {
  beforeEach(() => {
    saveSession({ id: '1', name: 'Milena', email: 'milena@email.com', username: 'milena' }, true)
  })

  it('abre os detalhes ao clicar em um card do feed', async () => {
    renderApp('/feed')

    await userEvent.click(screen.getByRole('link', { name: 'Painel de upload com pré-visualização' }))

    expect(
      screen.getByRole('heading', { level: 1, name: 'Painel de upload com pré-visualização' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Código:' })).toBeInTheDocument()
    expect(screen.getByText(/const pluckDeep/)).toBeInTheDocument()
  })

  it('copia o código para a área de transferência', async () => {
    const user = userEvent.setup()
    renderApp('/posts/painel-de-upload')

    await user.click(screen.getByRole('button', { name: 'Copiar código' }))

    expect(await screen.findByText('Copiado!')).toBeInTheDocument()
    expect(await navigator.clipboard.readText()).toMatch(/const pluckDeep/)
  })

  it('mostra aviso para post inexistente', () => {
    renderApp('/posts/nao-existe')

    expect(screen.getByRole('heading', { name: 'Post não encontrado' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Voltar para o feed' })).toHaveAttribute('href', '/feed')
  })
})
