import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button.jsx'
import Logo from '../../components/Logo/Logo.jsx'
import NavIcon from '../../components/NavIcon/NavIcon.jsx'
import { useAuth } from '../../context/useAuth.js'
import styles from './AppLayout.module.css'

const navItems = [
  { to: '/feed', label: 'Feed', icon: 'feed' },
  { to: '/perfil', label: 'Perfil', icon: 'profile' },
  { to: '/sobre', label: 'Sobre nós', icon: 'about' },
]

// NavLink recebe isActive e permite destacar a página atual.
function getLinkClass({ isActive }) {
  return isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
}

// Estrutura das páginas internas: menu lateral (desktop) ou barra inferior (celular).
function AppLayout() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <Logo />
        <div className={styles.publish}>
          <Button variant="outline" disabled title="Em breve">
            Publicar
          </Button>
        </div>

        <nav aria-label="Menu principal" className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={getLinkClass}>
                  <NavIcon name={item.icon} />
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <button type="button" className={styles.navItem} onClick={handleLogout}>
                <NavIcon name="logout" />
                Sair
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
