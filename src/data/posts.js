/*
  Posts iniciais do feed. Ainda não temos backend, então os dados ficam aqui.
  Autores, textos e capas são fictícios, criados só para demonstração.
*/
import capa1 from '../assets/posts/cover-1.svg'
import capa2 from '../assets/posts/cover-2.svg'
import capa3 from '../assets/posts/cover-3.svg'
import capa4 from '../assets/posts/cover-4.svg'
import capa5 from '../assets/posts/cover-5.svg'
import capa6 from '../assets/posts/cover-6.svg'

export const postsIniciais = [
  {
    id: 'kit-de-componentes',
    titulo: 'Kit de componentes para formulários',
    descricao:
      'Criei um conjunto de campos, botões e cartões reutilizáveis com estados de foco e erro.',
    capa: capa1,
    autor: { nome: 'Júlio Andrade', usuario: 'julio' },
    curtidas: 12,
    compartilhamentos: 4,
    codigo: `function Botao({ children, variante = 'primario' }) {
  return <button className={variante}>{children}</button>
}`,
  },
  {
    id: 'painel-de-upload',
    titulo: 'Painel de upload com pré-visualização',
    descricao:
      'Componente de envio de arquivos que mostra o tamanho máximo e avisa quando termina.',
    capa: capa2,
    autor: { nome: 'Marcela Lins', usuario: 'marcelalins' },
    curtidas: 30,
    compartilhamentos: 9,
    codigo: `const pluckDeep = (key) => (obj) =>
  key.split('.').reduce((accum, part) => accum[part], obj)

const compose = (...fns) => (res) =>
  fns.reduce((accum, next) => next(accum), res)`,
  },
  {
    id: 'botoes-neumorficos',
    titulo: 'Botões de ação em estilo neumórfico',
    descricao: 'Ícones de configurar, desfazer, cancelar e confirmar com sombras suaves.',
    capa: capa3,
    autor: { nome: 'Gabriel Luz', usuario: 'gabriel_luz' },
    curtidas: 8,
    compartilhamentos: 2,
    codigo: `.botao {
  border-radius: 50%;
  box-shadow: 6px 6px 12px #2b2f37, -6px -6px 12px #49505f;
}`,
  },
  {
    id: 'app-de-musica',
    titulo: 'Telas de um app de música',
    descricao: 'Fluxo de boas-vindas e assinatura com destaque para a oferta de desconto.',
    capa: capa4,
    autor: { nome: 'Júlio Andrade', usuario: 'julio' },
    curtidas: 21,
    compartilhamentos: 6,
    codigo: `const formatarDesconto = (valor) => \`\${Math.round(valor * 100)}% OFF\``,
  },
  {
    id: 'controles-de-audio',
    titulo: 'Controles deslizantes de áudio',
    descricao: 'Sliders de volume e equalizador com gradiente e marcação do valor atual.',
    capa: capa5,
    autor: { nome: 'Marcela Lins', usuario: 'marcelalins' },
    curtidas: 15,
    compartilhamentos: 3,
    codigo: `<input type="range" min="0" max="100" value="60" aria-label="Volume" />`,
  },
  {
    id: 'painel-de-progresso',
    titulo: 'Painel de progresso semanal',
    descricao: 'Barras de progresso e indicadores para acompanhar metas da semana.',
    capa: capa6,
    autor: { nome: 'Gabriel Luz', usuario: 'gabriel_luz' },
    curtidas: 5,
    compartilhamentos: 1,
    codigo: `const progresso = Math.min(feitas / total, 1)
barra.style.width = \`\${progresso * 100}%\``,
  },
]
