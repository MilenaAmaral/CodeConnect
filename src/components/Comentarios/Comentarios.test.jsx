import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { contarComentarios, listarComentarios } from '../../services/comentarios.js'
import { renderizarApp } from '../../test/renderizarApp.jsx'

describe('services/comentarios', () => {
  it('monta as respostas dentro do comentário original', () => {
    const comentarios = listarComentarios('painel-de-upload')

    expect(comentarios).toHaveLength(2)
    expect(comentarios[1].respostas[0].texto).toBe('Até que foi rápido, uns 3 dias!')
  })

  it('conta comentários e respostas juntos', () => {
    expect(contarComentarios('painel-de-upload')).toBe(3)
    expect(contarComentarios('app-de-musica')).toBe(0)
  })
})

describe('Comentários na página de detalhes', () => {
  it('mostra e oculta as respostas', async () => {
    renderizarApp('/posts/painel-de-upload')

    expect(screen.queryByText('Até que foi rápido, uns 3 dias!')).not.toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Ver respostas (1)' }))
    expect(screen.getByText('Até que foi rápido, uns 3 dias!')).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Ocultar respostas' }))
    expect(screen.queryByText('Até que foi rápido, uns 3 dias!')).not.toBeInTheDocument()
  })

  it('publica um comentário novo e atualiza o contador', async () => {
    renderizarApp('/posts/app-de-musica')

    expect(screen.getByText(/ainda não há comentários/i)).toBeInTheDocument()

    await userEvent.type(screen.getByLabelText('Deixe seu comentário'), 'Ficou ótimo!')
    await userEvent.click(screen.getByRole('button', { name: 'Comentar' }))

    expect(screen.getByText('Ficou ótimo!')).toBeInTheDocument()
    expect(screen.getByText('@voce')).toBeInTheDocument()
    // O contador de comentários do card de detalhes passa a mostrar 1
    expect(screen.getByText('comentários').parentElement).toHaveTextContent('1')
  })

  it('não envia comentário vazio', async () => {
    renderizarApp('/posts/app-de-musica')

    await userEvent.type(screen.getByLabelText('Deixe seu comentário'), '   ')
    await userEvent.click(screen.getByRole('button', { name: 'Comentar' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Escreva algo antes de enviar.')
  })

  it('responde a um comentário e já mostra a resposta', async () => {
    renderizarApp('/posts/painel-de-upload')
    const comentarioDaMarcia = screen.getByText('Achei muito bom seu código, parabéns!').closest('li')

    await userEvent.click(within(comentarioDaMarcia).getByRole('button', { name: 'Responder' }))
    await userEvent.type(within(comentarioDaMarcia).getByLabelText('Responder a @marcia'), 'Obrigada!')
    await userEvent.click(within(comentarioDaMarcia).getByRole('button', { name: 'Enviar resposta' }))

    expect(within(comentarioDaMarcia).getByText('Obrigada!')).toBeInTheDocument()
    expect(within(comentarioDaMarcia).getByRole('button', { name: 'Ocultar respostas' })).toBeInTheDocument()
  })

  it('mantém o comentário salvo ao abrir a página de novo', async () => {
    const { unmount } = renderizarApp('/posts/app-de-musica')
    await userEvent.type(screen.getByLabelText('Deixe seu comentário'), 'Volto depois')
    await userEvent.click(screen.getByRole('button', { name: 'Comentar' }))
    unmount()

    renderizarApp('/posts/app-de-musica')

    expect(screen.getByText('Volto depois')).toBeInTheDocument()
  })
})
