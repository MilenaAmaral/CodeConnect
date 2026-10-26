import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button/Button.jsx'
import Checkbox from './Checkbox/Checkbox.jsx'
import TextField from './TextField/TextField.jsx'

describe('Button', () => {
  it('chama onClick ao ser clicado', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Login</Button>)

    await userEvent.click(screen.getByRole('button', { name: 'Login' }))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('usa type="button" por padrão para não enviar formulários sem querer', () => {
    render(<Button>Cancelar</Button>)

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })
})

describe('TextField', () => {
  it('associa o rótulo ao campo', () => {
    render(<TextField id="email" label="Email" />)

    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('mostra a mensagem de erro e marca o campo como inválido', () => {
    render(<TextField id="email" label="Email" error="Informe o email" />)

    const input = screen.getByLabelText('Email')
    expect(screen.getByRole('alert')).toHaveTextContent('Informe o email')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAccessibleDescription('Informe o email')
  })
})

describe('Checkbox', () => {
  it('alterna ao clicar no rótulo', async () => {
    render(<Checkbox id="lembrar" label="Lembrar-me" />)

    const checkbox = screen.getByLabelText('Lembrar-me')
    await userEvent.click(screen.getByText('Lembrar-me'))

    expect(checkbox).toBeChecked()
  })
})
