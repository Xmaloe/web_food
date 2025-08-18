import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Restaurante from '../pages/Restaurante'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante/:id" element={<Restaurante />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
