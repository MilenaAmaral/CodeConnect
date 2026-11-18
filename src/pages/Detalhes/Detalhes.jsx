import { useParams } from 'react-router'

// Tela de detalhes de um post.
// useParams lê o :id da URL. Em /posts/3, id vale "3".
function Detalhes() {
  const { id } = useParams()

  return <h1>Detalhes do post {id}</h1>
}

export default Detalhes