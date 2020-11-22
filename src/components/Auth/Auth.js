import './Auth.css';

function Auth() {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <div className="auth-container">
        <form
          onSubmit={formSubmitHandler}
        >
          <input
            autoFocus
            id="email"
            name="email"
            placeholder="E-mail"
            type="text"
          />
          <input
            id="password"
            name="password"
            type="password"
          />
          <button
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
