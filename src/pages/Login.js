import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      validarEmail: false,
      password: '',
      validarPassword: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.validateLogin(name, value);
  }

  validateLogin(name, value) {
    const email = new RegExp(/^[\w-.]+@([\w-]+.)+[\w-]{2,3}$/g);
    const password = new RegExp(/[\w\D]{6}/g);

    if (name === 'email') {
      this.setState({
        validarEmail: email.test(value),
      });
    }
    if (name === 'password') {
      this.setState({
        validarPassword: password.test(value),
      });
    }
  }

  render() {
    const { email, password, validarEmail, validarPassword } = this.state;
    const validarLogin = (validarEmail && validarPassword);
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email-input">
          Email:
          <input
            data-testid="email-input"
            type="email"
            name="email"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            data-testid="password-input"
            type="password"
            name="password"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !validarLogin }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

export default Login;
