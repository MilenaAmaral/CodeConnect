import styles from './SocialLogin.module.css'

// O login social exige configurar OAuth em um serviço externo.
// Por isso os botões aparecem desativados e sinalizados como "em breve".
function SocialLogin() {
  return (
    <div className={styles.social}>
      <p className={styles.divider}>ou entre com outras contas</p>
      <ul className={styles.list}>
        <li>
          <button type="button" className={styles.provider} disabled title="Em breve">
            GitHub
          </button>
        </li>
        <li>
          <button type="button" className={styles.provider} disabled title="Em breve">
            Gmail
          </button>
        </li>
      </ul>
      <p className={styles.note}>Login social em breve.</p>
    </div>
  )
}

export default SocialLogin
