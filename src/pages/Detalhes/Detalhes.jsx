import { useState } from 'react'
import { Link, useParams } from 'react-router'
import Avatar from '../../components/Avatar/Avatar.jsx'
import BlocoCodigo from '../../components/BlocoCodigo/BlocoCodigo.jsx'
import Estatisticas from '../../components/CardPost/Estatisticas.jsx'
import Comentarios from '../../components/Comentarios/Comentarios.jsx'
import { adicionarComentario, listarComentarios } from '../../services/comentarios.js'
import { buscarPostPorId } from '../../services/posts.js'
import { obterUsuarioAtual } from '../../services/usuario.js'
import styles from './Detalhes.module.css'

// Tela de detalhes de um post.
// useParams lê o :id da URL. Em /posts/painel-de-upload, id vale "painel-de-upload".
function Detalhes() {
  const { id } = useParams()
  const post = buscarPostPorId(id)

  // Endereço com id que não existe: mostramos um aviso em vez de quebrar a página
  if (!post) {
    return (
      <section className={styles.naoEncontrado}>
        <h1>Post não encontrado</h1>
        <p>O post que você procura não existe ou foi removido.</p>
        <Link to="/feed" className={styles.voltar}>
          Voltar para o feed
        </Link>
      </section>
    )
  }

  // key: se a URL mudar para outro post, o React recria o conteúdo
  // e o estado dos comentários começa do zero para o novo post.
  return <ConteudoPost key={post.id} post={post} />
}

/*
  Conteúdo de um post que existe.
  Fica em um componente separado porque hooks (useState) não podem vir
  depois de um "return" condicional, como o do post não encontrado acima.
*/
function ConteudoPost({ post }) {
  // O estado dos comentários fica aqui, e não dentro de <Comentarios>,
  // porque o contador do card também precisa saber quando chega um comentário novo.
  // Isso se chama "elevar o estado" para o componente pai comum.
  const [comentarios, setComentarios] = useState(() => listarComentarios(post.id))

  // Total = comentários principais + todas as respostas
  const totalComentarios = comentarios.reduce(
    (total, comentario) => total + 1 + comentario.respostas.length,
    0,
  )

  // idPai null cria um comentário; com um id, cria uma resposta a ele
  function comentar(texto, idPai = null) {
    adicionarComentario({ postId: post.id, texto, idPai, autor: obterUsuarioAtual() })
    setComentarios(listarComentarios(post.id))
  }

  return (
    <article className={styles.detalhes}>
      <Link to="/feed" className={styles.voltar}>
        <span className="material-icons" aria-hidden="true">
          arrow_back
        </span>
        Voltar para o feed
      </Link>

      <div className={styles.card}>
        <div className={styles.moldura}>
          <img src={post.capa} alt="" className={styles.capa} />
        </div>

        <div className={styles.corpo}>
          <h1 className={styles.titulo}>{post.titulo}</h1>
          <p className={styles.descricao}>{post.descricao}</p>
        </div>

        <footer className={styles.rodape}>
          {/* Mesmo componente dos cards do feed: os contadores ficam iguais nas duas telas */}
          <Estatisticas
            curtidas={post.curtidas}
            compartilhamentos={post.compartilhamentos}
            comentarios={totalComentarios}
          />
          <span className={styles.autor}>
            <Avatar nome={post.autor.nome} />@{post.autor.usuario}
          </span>
        </footer>
      </div>

      {/* aria-labelledby liga a seção ao seu título, para o leitor de tela */}
      <section className={styles.secao} aria-labelledby="titulo-codigo">
        <h2 id="titulo-codigo" className={styles.subtitulo}>
          Código:
        </h2>
        <BlocoCodigo codigo={post.codigo} />
      </section>

      <Comentarios comentarios={comentarios} aoComentar={comentar} />
    </article>
  )
}

export default Detalhes
