import { Navigate, Route, Routes } from 'react-router-dom'
import GuestRoute from './components/RouteGuards/GuestRoute.jsx'
import ProtectedRoute from './components/RouteGuards/ProtectedRoute.jsx'
import AppLayout from './layouts/AppLayout/AppLayout.jsx'
import About from './pages/About/About.jsx'
import Feed from './pages/Feed/Feed.jsx'
import Login from './pages/Login.jsx'
import PostDetails from './pages/PostDetails/PostDetails.jsx'
import Profile from './pages/Profile/Profile.jsx'
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
        <Route element={<AppLayout />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/posts/:postId" element={<PostDetails />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/sobre" element={<About />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/feed" replace />} />
    </Routes>
  )
}

export default App
