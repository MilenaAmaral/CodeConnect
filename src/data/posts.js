// Posts iniciais do feed. Autores e conteúdos são fictícios, criados para demonstração.
import cover1 from '../assets/posts/cover-1.svg'
import cover2 from '../assets/posts/cover-2.svg'
import cover3 from '../assets/posts/cover-3.svg'
import cover4 from '../assets/posts/cover-4.svg'
import cover5 from '../assets/posts/cover-5.svg'
import cover6 from '../assets/posts/cover-6.svg'

export const initialPosts = [
  {
    id: 'kit-de-componentes-ui',
    title: 'Kit de componentes para formulários',
    description:
      'Criei um conjunto de campos, botões e cartões reutilizáveis com estados de foco e erro.',
    cover: cover1,
    author: { name: 'Júlio Andrade', username: 'julio' },
    likes: 12,
    shares: 4,
    comments: [],
    code: `function Button({ children, variant = 'primary' }) {
  return <button className={variant}>{children}</button>
}`,
  },
  {
    id: 'painel-de-upload',
    title: 'Painel de upload com pré-visualização',
    description:
      'Componente de envio de arquivos que mostra o tamanho máximo e uma notificação ao concluir.',
    cover: cover2,
    author: { name: 'Marcela Lins', username: 'marcelalins' },
    likes: 30,
    shares: 9,
    comments: [],
    code: `const pluckDeep = (key) => (obj) =>
  key.split('.').reduce((accum, part) => accum[part], obj)

const compose = (...fns) => (res) =>
  fns.reduce((accum, next) => next(accum), res)`,
  },
  {
    id: 'botoes-neumorficos',
    title: 'Botões de ação em estilo neumórfico',
    description: 'Ícones de configurar, desfazer, cancelar e confirmar com sombras suaves.',
    cover: cover3,
    author: { name: 'Gabriel Luz', username: 'gabriel_luz' },
    likes: 8,
    shares: 2,
    comments: [],
    code: `.button {
  border-radius: 50%;
  box-shadow: 6px 6px 12px #2b2f37, -6px -6px 12px #49505f;
}`,
  },
  {
    id: 'app-de-musica',
    title: 'Telas de um app de música',
    description: 'Fluxo de boas-vindas e assinatura com destaque para a oferta de desconto.',
    cover: cover4,
    author: { name: 'Júlio Andrade', username: 'julio' },
    likes: 21,
    shares: 6,
    comments: [],
    code: `const formatDiscount = (value) => \`\${Math.round(value * 100)}% OFF\``,
  },
  {
    id: 'controles-de-audio',
    title: 'Controles deslizantes de áudio',
    description: 'Sliders de volume e equalizador com gradiente e marcação do valor atual.',
    cover: cover5,
    author: { name: 'Marcela Lins', username: 'marcelalins' },
    likes: 15,
    shares: 3,
    comments: [],
    code: `<input type="range" min="0" max="100" value="60" aria-label="Volume" />`,
  },
  {
    id: 'dashboard-de-progresso',
    title: 'Dashboard de progresso',
    description: 'Barras de progresso e indicadores para acompanhar metas semanais.',
    cover: cover6,
    author: { name: 'Gabriel Luz', username: 'gabriel_luz' },
    likes: 5,
    shares: 1,
    comments: [],
    code: `const progress = Math.min(done / total, 1)
bar.style.width = \`\${progress * 100}%\``,
  },
]
