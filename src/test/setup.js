// Adiciona verificações como toBeInTheDocument() e toHaveAttribute() ao expect
import '@testing-library/jest-dom/vitest'

// Cada teste começa com o localStorage vazio, para um teste não interferir no outro
afterEach(() => {
  localStorage.clear()
})
