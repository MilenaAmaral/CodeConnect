import styles from '../InfoPage.module.css'

function About() {
  return (
    <section className={styles.card}>
      <h1 className={styles.title}>Sobre nós</h1>
      <p className={styles.text}>
        O CodeConnect é uma rede social para pessoas desenvolvedoras compartilharem projetos,
        trechos de código e trocarem ideias nos comentários.
      </p>
      <p className={styles.text}>
        Esta implementação foi desenvolvida por Milena Amaral a partir do layout do curso da Alura,
        como projeto de portfólio em React.
      </p>
    </section>
  )
}

export default About
