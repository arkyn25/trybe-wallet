import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email-input">
          Email:
          <input
            data-testid="email-input"
            type="email"
            name="email"
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            data-testid="password-input"
            type="password"
            name="password"
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

export default Login;
