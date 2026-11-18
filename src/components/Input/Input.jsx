import { useId } from 'react'
import styles from './Input.module.css'

/*
  Campo de formulário com rótulo.
  useId gera um id único para ligar o <label> ao <input>:
  clicar no texto foca o campo, e o leitor de tela anuncia o rótulo.
*/
function Input({ label, type = 'text', ...props }) {
  const id = useId()

  return (
    <div className={styles.campo}>
      <label htmlFor={id} className={styles.rotulo}>
        {label}
      </label>
      <input id={id} type={type} className={styles.input} {...props} />
    </div>
  )
}

export default Input