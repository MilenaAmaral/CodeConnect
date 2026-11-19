import { Link } from 'react-router'
import Avatar from '../Avatar/Avatar.jsx'
import { contarComentarios } from '../../services/comentarios.js'
import Estatisticas from './Estatisticas.jsx'
import styles from './CardPost.module.css'

// Card de um post no feed. O card inteiro leva para a página de detalhes.
function CardPost({ post }) {
  return (
    <article className={styles.card}>
      <div className={styles.moldura}>
        {/* alt vazio: o título logo abaixo já descreve o post */}
        <img src={post.capa} alt="" className={styles.capa} />
      </div>

      <div className={styles.corpo}>
        <h2 className={styles.titulo}>
          {/* O link fica só no título, mas o ::after dele (no CSS) cobre o card todo.
              Assim o card inteiro é clicável e o leitor de tela anuncia só o título. */}
          <Link to={`/posts/${post.id}`} className={styles.link}>
            {post.titulo}
          </Link>
        </h2>
        <p className={styles.descricao}>{post.descricao}</p>
      </div>

      <footer className={styles.rodape}>
        <Estatisticas
          curtidas={post.curtidas}
          compartilhamentos={post.compartilhamentos}
          comentarios={contarComentarios(post.id)}
        />
        <span className={styles.autor}>
          <Avatar nome={post.autor.nome} />@{post.autor.usuario}
        </span>
      </footer>
    </article>
  )
}

export default CardPost
