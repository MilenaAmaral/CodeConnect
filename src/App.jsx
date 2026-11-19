import { Routes, Route, Navigate } from 'react-router'
import Login from './pages/Login/Login.jsx'
import Cadastro from './pages/Cadastro/Cadastro.jsx'
import Feed from './pages/Feed/Feed.jsx'
import Detalhes from './pages/Detalhes/Detalhes.jsx'
import Publicar from './pages/Publicar/Publicar.jsx'
import Perfil from './pages/Perfil/Perfil.jsx'
import Sobre from './pages/Sobre/Sobre.jsx'
import AppLayout from './layouts/AppLayout/AppLayout.jsx'

// Componente raiz: decide qual página aparece de acordo com a URL.
function App() {
  return (
    <Routes>
      {/* A raiz manda para o login. "replace" evita que o botão Voltar caia num redirecionamento */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      {/* Rota "pai" sem path: envolve as páginas internas com o menu.
          Cada página filha aparece no lugar do <Outlet /> do AppLayout. */}
      <Route element={<AppLayout />}>
        <Route path="/feed" element={<Feed />} />
        <Route path="/posts/:id" element={<Detalhes />} />
        <Route path="/publicar" element={<Publicar />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/sobre" element={<Sobre />} />
      </Route>

      {/* Qualquer endereço inexistente volta para o início */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App