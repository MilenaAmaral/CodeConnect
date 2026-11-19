/*
  Comentários: os iniciais vêm de data/comentarios.js e os novos ficam salvos
  no localStorage do navegador. Sem backend, cada navegador vê só os comentários
  que foram feitos nele.
*/
import { comentariosIniciais } from '../data/comentarios.js'

const CHAVE = 'codeconnect:comentarios'

// localStorage só guarda texto, por isso usamos JSON.stringify e JSON.parse.
// O try/catch protege contra dados corrompidos ou armazenamento bloqueado.
function lerSalvos() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE)) ?? []
  } catch {
    return []
  }
}

function salvar(comentarios) {
  localStorage.setItem(CHAVE, JSON.stringify(comentarios))
}

function todosDoPost(postId) {
  return [...comentariosIniciais, ...lerSalvos()].filter(
    (comentario) => comentario.postId === postId,
  )
}

// Monta a árvore: cada comentário principal recebe a lista das suas respostas.
export function listarComentarios(postId) {
  const doPost = todosDoPost(postId)

  return doPost
    .filter((comentario) => comentario.idPai === null)
    .map((comentario) => ({
      ...comentario,
      respostas: doPost.filter((resposta) => resposta.idPai === comentario.id),
    }))
}

// Total do post, contando comentários e respostas (usado nos contadores dos cards).
export function contarComentarios(postId) {
  return todosDoPost(postId).length
}

// idPai = null cria um comentário novo; com um id, cria uma resposta a ele.
export function adicionarComentario({ postId, texto, autor, idPai = null }) {
  const novo = {
    id: crypto.randomUUID(), // gera um id único sem precisar de biblioteca
    postId,
    idPai,
    autor,
    texto: texto.trim(),
  }

  salvar([...lerSalvos(), novo])
  return novo
}
