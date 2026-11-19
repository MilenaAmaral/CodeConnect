import { Link, NavLink, Outlet, useNavigate } from 'react-router'
import Logo from '../../components/Logo/Logo.jsx'
import styles from './AppLayout.module.css'

// Itens do menu em uma lista: para adicionar uma página, basta incluir uma linha.
// icone: nome do ícone no Material Icons
const itensMenu = [
  { para: '/feed', texto: 'Feed', icone: 'feed' },
  { para: '/perfil', texto: 'Perfil', icone: 'account_circle' },
  { para: '/sobre', texto: 'Sobre nós', icone: 'info' },
]

// NavLink informa se o link aponta para a página atual (isActive).
// Usamos isso para destacar o item ativo no menu.
function classeDoLink({ isActive }) {
  return isActive ? `${styles.item} ${styles.ativo}` : styles.item
}

/*
  Moldura das páginas internas (Feed, Detalhes, Perfil...).
  No computador o menu fica numa coluna à esquerda; no celular, numa barra fixa embaixo.
  <Outlet /> é o lugar onde a página da rota atual aparece.
*/
function AppLayout() {
  const navigate = useNavigate()

  // Ainda sem autenticação: "Sair" apenas volta para o login.
  function sair() {
    navigate('/login')
  }

  return (
    <div className={styles.layout}>
      <aside className={styles.lateral}>
        <Logo />

        {/* Link com aparência de botão: é navegação, não uma ação no formulário */}
        <Link to="/publicar" className={styles.publicar}>
          Publicar
        </Link>

        <nav aria-label="Menu principal" className={styles.menu}>
          <ul className={styles.lista}>
            {itensMenu.map((item) => (
              <li key={item.para}>
                <NavLink to={item.para} className={classeDoLink}>
                  <span className="material-icons" aria-hidden="true">
                    {item.icone}
                  </span>
                  {item.texto}
                </NavLink>
              </li>
            ))}
            <li>
              <button type="button" className={styles.item} onClick={sair}>
                <span className="material-icons" aria-hidden="true">
                  logout
                </span>
                Sair
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <main className={styles.conteudo}>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
