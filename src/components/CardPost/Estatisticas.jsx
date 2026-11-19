import styles from './Estatisticas.module.css'

/*
  Contadores do post, como no Figma: código (curtidas), compartilhar e comentários.
  O texto escondido faz o leitor de tela dizer "12 curtidas" em vez de só "12".
*/
function Estatisticas({ curtidas, compartilhamentos, comentarios }) {
  const itens = [
    { icone: 'code', valor: curtidas, rotulo: 'curtidas' },
    { icone: 'share', valor: compartilhamentos, rotulo: 'compartilhamentos' },
    { icone: 'chat', valor: comentarios, rotulo: 'comentários' },
  ]

  return (
    <ul className={styles.lista}>
      {itens.map((item) => (
        <li key={item.icone} className={styles.item}>
          <span className="material-icons" aria-hidden="true">
            {item.icone}
          </span>
          <span>
            {item.valor} <span className="visualmente-oculto">{item.rotulo}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}

export default Estatisticas
