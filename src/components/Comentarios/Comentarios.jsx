import Comentario from './Comentario.jsx'
import FormComentario from './FormComentario.jsx'
import styles from './Comentarios.module.css'

/*
  Seção de comentários: formulário no topo e a lista abaixo.
  Este componente não guarda estado próprio. Quem guarda a lista é a página
  de detalhes, porque ela também precisa do total para o contador do post.
  - comentarios: lista já montada (comentário > respostas)
  - aoComentar(texto, idPai): função da página que salva o comentário ou a resposta
*/
function Comentarios({ comentarios, aoComentar }) {
  return (
    <section className={styles.secao} aria-labelledby="titulo-comentarios">
      <h2 id="titulo-comentarios" className={styles.titulo}>
        Comentários
      </h2>

      <FormComentario
        rotulo="Deixe seu comentário"
        textoBotao="Comentar"
        aoEnviar={(texto) => aoComentar(texto)}
      />

      {comentarios.length > 0 ? (
        <ul className={styles.lista}>
          {comentarios.map((comentario) => (
            <Comentario key={comentario.id} comentario={comentario} aoResponder={aoComentar} />
          ))}
        </ul>
      ) : (
        <p className={styles.vazio}>Ainda não há comentários. Seja a primeira pessoa a comentar!</p>
      )}
    </section>
  )
}

export default Comentarios
