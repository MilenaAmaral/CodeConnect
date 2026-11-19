/*
  Funções de acesso aos posts.
  Hoje os dados vêm de um arquivo; se um dia vierem de uma API,
  só este arquivo muda e as páginas continuam iguais.
*/
import { postsIniciais } from '../data/posts.js'

export function listarPosts() {
  return postsIniciais
}

// Deixa o texto comparável: tira acentos e ignora maiúsculas.
// normalize('NFD') separa a letra do acento ("ã" vira "a" + "~"),
// e o replace remove esses acentos soltos.
function normalizar(texto) {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
}

// Filtra os posts cujo título, descrição ou usuário do autor contém o termo buscado.
export function buscarPosts(posts, termo) {
  const termoNormalizado = normalizar(termo.trim())
  if (!termoNormalizado) return posts

  return posts.filter((post) =>
    [post.titulo, post.descricao, post.autor.usuario].some((campo) =>
      normalizar(campo).includes(termoNormalizado),
    ),
  )
}
