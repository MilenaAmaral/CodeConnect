import styles from './Button.module.css'

/*
  Botão reutilizável.
  - variante: "primario" (verde preenchido) ou "secundario" (só contorno)
  - icone: nome de um ícone do Material Icons, ex.: "arrow_forward"
  - ...props repassa qualquer outro atributo (onClick, disabled...) para o <button>
*/
function Button({ children, icone, variante = 'primario', type = 'button', ...props }) {
  return (
    <button type={type} className={`${styles.botao} ${styles[variante]}`} {...props}>
      {children}
      {/* aria-hidden: o ícone é decorativo, então o leitor de tela lê só o texto */}
      {icone && (
        <span className="material-icons" aria-hidden="true">
          {icone}
        </span>
      )}
    </button>
  )
}

export default Button