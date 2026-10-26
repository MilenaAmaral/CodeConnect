import { initialPosts } from '../data/posts.js'

export function getPosts() {
  return initialPosts
}

// Remove acentos e ignora maiúsculas: "Botões" encontra "botoes".
function normalize(text) {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
}

export function searchPosts(posts, query) {
  const term = normalize(query.trim())
  if (!term) return posts

  return posts.filter((post) =>
    [post.title, post.description, post.author.username].some((field) =>
      normalize(field).includes(term),
    ),
  )
}
