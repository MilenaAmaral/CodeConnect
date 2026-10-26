import { hasErrors, validateLogin, validateRegister } from './validation.js'

describe('validateLogin', () => {
  it('exige email ou usuário e senha', () => {
    const errors = validateLogin({ identifier: '  ', password: '' })

    expect(errors.identifier).toBeDefined()
    expect(errors.password).toBeDefined()
  })

  it('rejeita senha com menos de 6 caracteres', () => {
    const errors = validateLogin({ identifier: 'milena', password: '123' })

    expect(errors.password).toMatch(/6 caracteres/)
  })

  it('aceita dados válidos', () => {
    const errors = validateLogin({ identifier: 'milena', password: '123456' })

    expect(hasErrors(errors)).toBe(false)
  })
})

describe('validateRegister', () => {
  it('rejeita email em formato inválido', () => {
    const errors = validateRegister({ name: 'Milena', email: 'milena@', password: '123456' })

    expect(errors.email).toBe('Informe um email válido.')
  })

  it('aceita dados válidos', () => {
    const errors = validateRegister({
      name: 'Milena',
      email: 'milena@email.com',
      password: '123456',
    })

    expect(hasErrors(errors)).toBe(false)
  })
})
