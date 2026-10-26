import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { initialPosts } from '../../data/posts.js'
import { saveSession } from '../../services/authService.js'
import { searchPosts } from '../../services/postService.js'
import { renderApp } from '../../test/renderApp.jsx'

describe('searchPosts', () => {
  it('ignora acentos e maiúsculas', () => {
    const result = searchPosts(initialPosts, 'NEUMORFICO')

    expect(result.map((post) => post.id)).toEqual(['botoes-neumorficos'])
  })

  it('busca também pelo usuário do autor', () => {
    const result = searchPosts(initialPosts, 'marcelalins')

    expect(result).toHaveLength(2)
  })
})

describe('Feed', () => {
  beforeEach(() => {
    saveSession({ id: '1', name: 'Milena', email: 'milena@email.com', username: 'milena' }, true)
  })

  it('lista todos os posts', () => {
    renderApp('/feed')

    expect(screen.getAllByRole('article')).toHaveLength(initialPosts.length)
  })

  it('filtra os posts pela busca e avisa quando não encontra nada', async () => {
    renderApp('/feed')
    const search = screen.getByRole('searchbox', { name: 'Buscar posts' })

    await userEvent.type(search, 'upload')
    expect(screen.getAllByRole('article')).toHaveLength(1)
    expect(screen.getByRole('heading', { name: 'Painel de upload com pré-visualização' })).toBeInTheDocument()

    await userEvent.clear(search)
    await userEvent.type(search, 'xyz')
    expect(screen.queryAllByRole('article')).toHaveLength(0)
    expect(screen.getByText('Nenhum post encontrado para “xyz”.')).toBeInTheDocument()
  })
})
