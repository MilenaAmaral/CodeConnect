// O Vite transforma o import de um arquivo em uma URL que pode ir no src
import logo from '../../assets/logo.svg'

// Logo da marca. width e height reservam o espaço antes da imagem carregar,
// o que evita a página "pular" quando ela aparece.
function Logo() {
  return <img src={logo} alt="CodeConnect" width="127" height="40" />
}

export default Logo