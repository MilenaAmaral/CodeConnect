import { useId } from 'react'
import styles from './BarraBusca.module.css'

/*
  Campo de busca controlado: o valor vem de quem usa o componente (props),
  e cada tecla digitada avisa a página pelo onChange.
*/
function BarraBusca({ valor, onChange }) {
  const id = useId()

  return (
    <div className={styles.busca} role="search">
      {/* Rótulo escondido na tela, mas lido pelo leitor de tela */}
      <label htmlFor={id} className="visualmente-oculto">
        Buscar posts
      </label>
      <span className="material-icons" aria-hidden="true">
        search
      </span>
      <input
        id={id}
        type="search"
        className={styles.input}
        placeholder="Digite o que você procura"
        value={valor}
        onChange={(evento) => onChange(evento.target.value)}
      />
    </div>
  )
}

export default BarraBusca
