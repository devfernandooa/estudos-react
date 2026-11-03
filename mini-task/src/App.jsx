import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; // Importa o Provider
import RotaProtegida from './components/RotaProtegida'; // Importa o segurança
import Home from './pages/Home';
import Login from './pages/Login';
import Tarefas from './pages/Tarefas';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <nav className="bg-slate-800 p-4 flex items-center justify-between text-white">
          {/* Lado Esquerdo: Logo */}
          <div className="font-bold text-xl">Mini-Tasks</div>

          {/* Lado Direito: Links */}
          <div className="flex gap-6 items-center">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="/login" className="hover:text-blue-400">Login</Link>
            <Link to="/tarefas" className="hover:text-blue-400">Tarefas</Link>
          </div>
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