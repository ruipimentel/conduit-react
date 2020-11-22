import { useState } from 'react';

import './Auth.css';

function Auth(props) {

  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log({
      username,
      email,
      password
    });
  };

  const campoUsername = <input
    autoFocus
    value={username}
    onChange={event => setUsername(event.target.value)}
    id="username"
    name="username"
    placeholder="Nome de usuário"
    type="text"
  />;

  return (
    <div className="container">
      <h1>{ props.register ? 'Cadastrar' : 'Login' }</h1>
      <div className="auth-container">
        <form
          onSubmit={formSubmitHandler}
        >
          { props.register ? campoUsername : null }
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
