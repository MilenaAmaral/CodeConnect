import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import App from '../App.jsx'

// Renderiza a aplicação inteira já em uma rota, como se a pessoa digitasse a URL.
// MemoryRouter guarda a navegação na memória, sem precisar de um navegador de verdade.
export function renderizarApp(rota = '/') {
  return render(
    <MemoryRouter initialEntries={[rota]}>
      <App />
    </MemoryRouter>,
  )
}
