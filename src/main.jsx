// Ponto de entrada da aplicação: conecta o React à div #root do index.html
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// StrictMode só atua em desenvolvimento e aponta práticas inseguras no console
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)