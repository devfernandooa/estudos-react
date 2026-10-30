import '../pages/css/login.estilos.css';

function Login() {

  return (
    <div className="login-container">

      <h2 className="login-title">Login</h2>
      <form className="form-login" action="">
        <div className="login-body">
          <div className="div-email">
            <label htmlFor="">E-Mail: </label>
            <input type="email" />
          </div>
          <div className="div-senha">
            <label htmlFor="">Senha: </label>
            <input type="password" />
          </div>
          <div className="footer-login">
            <button>
              Entrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
