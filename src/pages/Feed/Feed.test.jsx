import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { postsIniciais } from '../../data/posts.js'
import { buscarPosts } from '../../services/posts.js'
import { renderizarApp } from '../../test/renderizarApp.jsx'

describe('buscarPosts', () => {
  it('ignora acentos e maiúsculas', () => {
    const resultado = buscarPosts(postsIniciais, 'NEUMORFICO')

    expect(resultado.map((post) => post.id)).toEqual(['botoes-neumorficos'])
  })

  it('também busca pelo usuário do autor', () => {
    const resultado = buscarPosts(postsIniciais, 'marcelalins')

    expect(resultado).toHaveLength(2)
  })

  it('devolve todos os posts quando a busca está vazia', () => {
    expect(buscarPosts(postsIniciais, '   ')).toHaveLength(postsIniciais.length)
  })
})

describe('Feed', () => {
  it('mostra um card para cada post', () => {
    renderizarApp('/feed')

    expect(screen.getAllByRole('article')).toHaveLength(postsIniciais.length)
  })

  it('filtra pela busca e avisa quando não encontra nada', async () => {
    renderizarApp('/feed')
    const busca = screen.getByRole('searchbox', { name: 'Buscar posts' })

    await userEvent.type(busca, 'upload')
    expect(screen.getAllByRole('article')).toHaveLength(1)

    await userEvent.clear(busca)
    await userEvent.type(busca, 'xyz')
    expect(screen.queryAllByRole('article')).toHaveLength(0)
    expect(screen.getByText('Nenhum post encontrado para “xyz”.')).toBeInTheDocument()
  })

  it('cada card leva para a página de detalhes do post', () => {
    renderizarApp('/feed')

    expect(screen.getByRole('link', { name: 'Painel de upload com pré-visualização' })).toHaveAttribute(
      'href',
      '/posts/painel-de-upload',
    )
  })
})
