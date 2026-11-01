import { useState } from 'react';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../pages/css/login.estilos.css';

function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setErro('');
    setLoading(true);
    try {
      /**
       * Aqui chamamos o firebase numa função assincrona
       * e passamos o email e senha para autenticar o usuário
       * caso o usuário seja autenticado, ele será redirecionado para a página de tarefas
       * caso contrário, será exibida uma mensagem de erro
       */
      await signInWithEmailAndPassword(auth, email, senha);
      navigate('/tarefas');
    } catch (error) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        setErro('Usuário ou senha incorretos.');
      } else {
        setErro('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde.');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      {erro && <p className="error-message">{erro}</p>}
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="login-body">
          <div className="div-email">
            <label htmlFor='userEmail'>E-Mail: </label>
            <input type="email" id='userEmail' name='userEmail' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="div-senha">
            <label htmlFor='userPassword'>Senha: </label>
            <input type="password" id='user-password' name='userPassword' value={senha} onChange={(e) => setSenha(e.target.value)} />
          </div>
          <div className="footer-login">
            <button type="submit" disabled={loading} className="btn-login">
              {loading ? 'Carregando...' : 'Entrar'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
