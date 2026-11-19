import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderizarApp } from '../../test/renderizarApp.jsx'

describe('Detalhes', () => {
  it('abre os detalhes ao clicar em um card do feed', async () => {
    renderizarApp('/feed')

    await userEvent.click(screen.getByRole('link', { name: 'Painel de upload com pré-visualização' }))

    expect(
      screen.getByRole('heading', { level: 1, name: 'Painel de upload com pré-visualização' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Código:' })).toBeInTheDocument()
    expect(screen.getByText(/const pluckDeep/)).toBeInTheDocument()
  })

  it('copia o código para a área de transferência', async () => {
    // setup() cria uma área de transferência falsa que o teste consegue ler
    const usuario = userEvent.setup()
    renderizarApp('/posts/painel-de-upload')

    await usuario.click(screen.getByRole('button', { name: /copiar código/i }))

    expect(await screen.findByText('Copiado!')).toBeInTheDocument()
    expect(await navigator.clipboard.readText()).toMatch(/const pluckDeep/)
  })

  it('mostra um aviso quando o post não existe', () => {
    renderizarApp('/posts/nao-existe')

    expect(screen.getByRole('heading', { name: 'Post não encontrado' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Voltar para o feed' })).toHaveAttribute('href', '/feed')
  })
})
