import { useId, useState } from 'react'
import Button from '../Button/Button.jsx'
import styles from './Comentarios.module.css'

const LIMITE = 500

/*
  Formulário usado tanto para comentar quanto para responder.
  - rotulo: texto do campo ("Deixe seu comentário" ou "Sua resposta")
  - aoEnviar: função que a tela passa para salvar o texto
*/
function FormComentario({ rotulo, textoBotao, aoEnviar, focarAoAbrir = false }) {
  const id = useId()
  const [texto, setTexto] = useState('')
  const [erro, setErro] = useState('')

  function enviar(evento) {
    evento.preventDefault()

    // trim() ignora comentários com só espaços
    if (!texto.trim()) {
      setErro('Escreva algo antes de enviar.')
      return
    }

    aoEnviar(texto)
    setTexto('')
    setErro('')
  }

  return (
    <form className={styles.formulario} onSubmit={enviar} noValidate>
      <label htmlFor={id} className={styles.rotulo}>
        {rotulo}
      </label>
      <textarea
        id={id}
        className={styles.campo}
        rows={3}
        maxLength={LIMITE}
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
        aria-invalid={erro ? 'true' : 'false'}
        aria-describedby={erro ? `${id}-erro` : undefined}
        // Ao clicar em "Responder", o cursor já vai para o campo
        autoFocus={focarAoAbrir}
      />
      <div className={styles.rodapeForm}>
        {/* Contador ajuda a pessoa a não ser cortada pelo limite sem perceber */}
        <span className={styles.contador}>
          {texto.length}/{LIMITE}
        </span>
        <div className={styles.botaoEnviar}>
          <Button type="submit">{textoBotao}</Button>
        </div>
      </div>
      {erro && (
        <p id={`${id}-erro`} className={styles.erro} role="alert">
          {erro}
        </p>
      )}
    </form>
  )
}

export default FormComentario
