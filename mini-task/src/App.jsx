import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; // Importa o Provider
import RotaProtegida from './components/RotaProtegida'; // Importa o segurança
import Home from './pages/Home';
import Login from './pages/Login';
import Tarefas from './pages/Tarefas';
import './App.css'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <nav className='nav-bar'>
          <ul className='ul-nav-bar'>
            <li className='li-ul-nav-bar'><Link to="/">Home</Link></li>
            <li className='li-ul-nav-bar'><Link to="/login">Login</Link></li>
            <li className='li-ul-nav-bar'><Link to="/tarefas">Tarefas</Link></li>
          </ul>          
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          {/* A rota de Tarefas agora está protegida! */}
          <Route 
            path="/tarefas" 
            element={
              <RotaProtegida>
                <Tarefas />
              </RotaProtegida>
            } 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}