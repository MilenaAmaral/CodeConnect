import { Navigate, Route, Routes } from 'react-router-dom'
import GuestRoute from './components/RouteGuards/GuestRoute.jsx'
import ProtectedRoute from './components/RouteGuards/ProtectedRoute.jsx'
import Feed from './pages/Feed/Feed.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/feed" replace />} />

      <Route element={<GuestRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/feed" element={<Feed />} />
      </Route>

      <Route path="*" element={<Navigate to="/feed" replace />} />
    </Routes>
  )
}

export default App
