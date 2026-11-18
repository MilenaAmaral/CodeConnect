// Ponto de entrada da aplicação: conecta o React à div #root do index.html
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
// Estilos globais: tokens do Figma + reset, aplicados em toda a aplicação
import './styles/global.css'
import App from './App.jsx'

// StrictMode só atua em desenvolvimento e aponta práticas inseguras no console.
// BrowserRouter envolve o App para que qualquer componente consiga ler e mudar a URL.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)