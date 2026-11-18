import github from '../../assets/github.svg'
import google from '../../assets/google.svg'
import styles from './SocialLogin.module.css'

// Os dados ficam numa lista: para adicionar um provedor, basta incluir um item aqui
const provedores = [
  { nome: 'Github', icone: github, tamanho: 32 },
  { nome: 'Gmail', icone: google, tamanho: 28 },
]

// Bloco "ou entre com outras contas". Sem backend, os botões são só interface por enquanto.
function SocialLogin() {
  return (
    <div className={styles.social}>
      <p className={styles.divisor}>ou entre com outras contas</p>

      <ul className={styles.lista}>
        {/* map transforma cada item em um <li>. "key" ajuda o React a identificar cada item */}
        {provedores.map((provedor) => (
          <li key={provedor.nome}>
            <button type="button" className={styles.botao}>
              <img src={provedor.icone} alt="" width={provedor.tamanho} height={provedor.tamanho} />
              {provedor.nome}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLogin