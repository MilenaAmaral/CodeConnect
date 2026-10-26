import { useState } from 'react'
import styles from './CodeBlock.module.css'

function CodeBlock({ code }) {
  const [copyStatus, setCopyStatus] = useState('')

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopyStatus('Copiado!')
    } catch {
      // O navegador pode bloquear a área de transferência (ex.: página sem HTTPS).
      setCopyStatus('Não foi possível copiar.')
    }
  }

  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.copy} onClick={handleCopy}>
        Copiar código
      </button>
      <span className={styles.status} aria-live="polite">
        {copyStatus}
      </span>
      {/* tabIndex permite rolar o código pelo teclado quando ele é largo. */}
      <pre className={styles.pre} tabIndex={0}>
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default CodeBlock
