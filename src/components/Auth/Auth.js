import { useState } from 'react';

import './Auth.css';

function Auth({
  onSubmit,
  register
}) {

  const [ username, setUsername ] = useState('');
  const [ erroUsername, setErroUsername ] = useState('');

  const [ email, setEmail ] = useState('');
  const [ erroEmail, setErroEmail ] = useState('');

  const [ password, setPassword ] = useState('');
  const [ erroPassword, setErroPassword ] = useState('');

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const dados = {
      email,
      password
    };
    if (register) {
      dados.username = username;
    }
    onSubmit(dados);
  };

  const campoUsername = <>
    <input
      autoFocus
      value={username}
      onChange={(event) => {
        setUsername(event.target.value);
        setErroUsername(usernameValidator(event.target.value));
      }}
      id="username"
      name="username"
      placeholder="Nome de usuário"
      type="text"
      className="col auth-input"
    />
    <div className="auth-error">{erroUsername}</div>
  </>;

  return (
    <div className="container">
      <h1 className="center">{ register ? 'Cadastrar' : 'Login' }</h1>
      <div className="auth-container">
        <form
          onSubmit={formSubmitHandler}
        >

          { register ? campoUsername : null }

          <input
            autoFocus={!register}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setErroEmail(emailValidator(event.target.value));
            }}
            id="email"
            name="email"
            placeholder="E-mail"
            type="text"
            className="col auth-input"
          />
          <div className="auth-error">{erroEmail}</div>

          <input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setErroPassword(passwordValidator(event.target.value));
            }}
            id="password"
            name="password"
            type="password"
            className="col auth-input"
          />
          <div className="auth-error">{erroPassword}</div>

          <div className="right">
            <button
              type="submit"
              className="auth-button btn-primary"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/**
 * Função de validação do username.
 *
 * Em caso de erro, retorna a mensagem a ser exibida.
 */
function usernameValidator(username) {
  if (username.length === 0) {
    return 'O nome de usuário é obrigatório.';
  } else if (username.length > 20) {
    return 'O nome de usuário deve possuir no máximo 20 caracteres.';
  } else {
    return '';
  }
}

/**
 * Função de validação do e-mail.
 *
 * Em caso de erro, retorna a mensagem a ser exibida.
 */
function emailValidator(email) {
  return email.length > 0 ? '' : 'O e-mail é obrigatório.';
}

/**
 * Função de validação da senha.
 *
 * Em caso de erro, retorna a mensagem a ser exibida.
 */
function passwordValidator(password) {
  const contemNumero = /[0-9]/.test(password);
  const contemMaiuscula = /[A-Z]/.test(password);
  const contemMinuscula = /[a-z]/.test(password);
  if (contemNumero && contemMaiuscula && contemMinuscula) {
    return '';
  } else {
    return 'A senha deve conter ao menos 1 número, 1 letra maiúscula e 1 letra minúscula.';
  }
}

export default Auth;
