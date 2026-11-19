import { Link, useParams } from 'react-router'
import Avatar from '../../components/Avatar/Avatar.jsx'
import BlocoCodigo from '../../components/BlocoCodigo/BlocoCodigo.jsx'
import Estatisticas from '../../components/CardPost/Estatisticas.jsx'
import { buscarPostPorId } from '../../services/posts.js'
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
            comentarios={post.comentarios.length}
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
    </article>
  )
}

export default Detalhes
