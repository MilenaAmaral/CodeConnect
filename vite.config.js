import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuração do Vitest (os testes usam o mesmo Vite do projeto)
  test: {
    environment: 'jsdom', // simula um navegador dentro do Node
    globals: true, // libera describe, it e expect sem precisar importar
    setupFiles: './src/test/setup.js', // roda antes de cada arquivo de teste
  },
})
