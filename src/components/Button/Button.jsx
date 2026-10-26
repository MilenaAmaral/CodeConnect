import styles from './Button.module.css'

// variant: 'primary' (verde preenchido) ou 'outline' (apenas borda)
function Button({ children, variant = 'primary', type = 'button', ...props }) {
  return (
    <button type={type} className={`${styles.button} ${styles[variant]}`} {...props}>
      {children}
    </button>
  )
}

export default Button
