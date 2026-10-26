import '@testing-library/jest-dom/vitest'

// Cada teste começa sem usuários nem sessão salvos.
afterEach(() => {
  localStorage.clear()
  sessionStorage.clear()
})
