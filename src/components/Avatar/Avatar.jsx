import styles from './Avatar.module.css'

// Pega as iniciais do nome: "Marcela Lins" vira "ML".
function iniciais(nome) {
  return nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0].toUpperCase())
    .join('')
}

// Sem fotos de perfil por enquanto: o avatar mostra as iniciais.
// aria-hidden: o @usuario ao lado já identifica a pessoa para o leitor de tela.
function Avatar({ nome }) {
  return (
    <span className={styles.avatar} aria-hidden="true">
      {iniciais(nome)}
    </span>
  )
}

export default Avatar
