import { useState } from 'react';

import './Auth.css';

function Auth() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log({
      email,
      password
    });
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
            value={email}
            onChange={event => setEmail(event.target.value)}
            id="email"
            name="email"
            placeholder="E-mail"
            type="text"
          />
          <input
            value={password}
            onChange={event => setPassword(event.target.value)}
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
