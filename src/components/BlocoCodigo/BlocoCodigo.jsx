import { useState } from 'react'
import styles from './BlocoCodigo.module.css'

// Mostra um trecho de código e permite copiá-lo com um clique.
function BlocoCodigo({ codigo }) {
  const [aviso, setAviso] = useState('')

  async function copiar() {
    // try/catch: o navegador pode bloquear a área de transferência
    // (por exemplo, em páginas sem HTTPS). Nesse caso avisamos em vez de falhar calado.
    try {
      await navigator.clipboard.writeText(codigo)
      setAviso('Copiado!')
    } catch {
      setAviso('Não foi possível copiar.')
    }
  }

  return (
    <div className={styles.bloco}>
      <div className={styles.barra}>
        {/* aria-live: o leitor de tela anuncia o aviso quando ele aparece */}
        <span className={styles.aviso} aria-live="polite">
          {aviso}
        </span>
        <button type="button" className={styles.copiar} onClick={copiar}>
          <span className="material-icons" aria-hidden="true">
            content_copy
          </span>
          Copiar código
        </button>
      </div>

      {/* <pre> mantém espaços e quebras de linha; <code> indica que é código.
          tabIndex permite rolar o código pelo teclado quando ele é mais largo que a tela. */}
      <pre className={styles.pre} tabIndex={0}>
        <code>{codigo}</code>
      </pre>
    </div>
  )
}

export default BlocoCodigo
