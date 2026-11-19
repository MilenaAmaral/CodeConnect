import { useState } from 'react'
import Avatar from '../Avatar/Avatar.jsx'
import FormComentario from './FormComentario.jsx'
import styles from './Comentarios.module.css'

/*
  Um comentário principal, com suas respostas.
  - aoResponder: função da tela que salva a resposta
*/
function Comentario({ comentario, aoResponder }) {
  const [respondendo, setRespondendo] = useState(false)
  const [mostrarRespostas, setMostrarRespostas] = useState(false)
  const totalRespostas = comentario.respostas.length

  function enviarResposta(texto) {
    aoResponder(texto, comentario.id)
    setRespondendo(false)
    setMostrarRespostas(true) // abre a lista para a pessoa ver a resposta que acabou de enviar
  }

  return (
    <li className={styles.comentario}>
      <div className={styles.cabecalho}>
        <Avatar nome={comentario.autor.nome} />
        <span className={styles.usuario}>@{comentario.autor.usuario}</span>
      </div>
      <p className={styles.texto}>{comentario.texto}</p>

      <div className={styles.acoes}>
        {/* aria-expanded informa ao leitor de tela se o formulário está aberto */}
        <button
          type="button"
          className={styles.acao}
          aria-expanded={respondendo}
          onClick={() => setRespondendo(!respondendo)}
        >
          {respondendo ? 'Cancelar' : 'Responder'}
        </button>

        {totalRespostas > 0 && (
          <button
            type="button"
            className={styles.acao}
            aria-expanded={mostrarRespostas}
            onClick={() => setMostrarRespostas(!mostrarRespostas)}
          >
            {mostrarRespostas ? 'Ocultar respostas' : `Ver respostas (${totalRespostas})`}
          </button>
        )}
      </div>

      {respondendo && (
        <FormComentario
          rotulo={`Responder a @${comentario.autor.usuario}`}
          textoBotao="Enviar resposta"
          aoEnviar={enviarResposta}
          focarAoAbrir
        />
      )}

      {mostrarRespostas && totalRespostas > 0 && (
        <ul className={styles.respostas}>
          {comentario.respostas.map((resposta) => (
            <li key={resposta.id} className={styles.resposta}>
              <div className={styles.cabecalho}>
                <Avatar nome={resposta.autor.nome} />
                <span className={styles.usuario}>@{resposta.autor.usuario}</span>
              </div>
              <p className={styles.texto}>{resposta.texto}</p>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default Comentario
