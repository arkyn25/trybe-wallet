import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { requestCurrencies, addExpense } from '../actions';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: '',
  method: '',
  tag: '',
};

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;

    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderMoeda = this.renderMoeda.bind(this);
    this.renderPagamento = this.renderPagamento.bind(this);
    this.renderTag = this.renderTag.bind(this);
  }

  renderValue(value) {
    return (
      <label htmlFor="valor">
        Valor:
        <input
          value={ value }
          name="value"
          id="valor"
        />
      </label>
    );
  }

  renderDescription(value) {
    return (
      <label htmlFor="descrição">
        Descrição:
        <input
          value={ value }
          name="description"
          id="descrição"
        />
      </label>
    );
  }

  renderMoeda() {
    return (
      <label htmlFor="moeda">
        {' '}
        Moeda
        <select name="moeda" id="moeda">
          <option value="temporary">Temporary</option>
        </select>
      </label>
    );
  }

  renderPagamento(value) {
    return (
      <label htmlFor="metodoDePagamento">
        {' '}
        Método de Pagamento
        <select
          value={ value }
          name="method"
          id="metodoDePagamento"
        >
          <option>Selecione uma opção</option>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>

    );
  }

  renderTag(value) {
    return (
      <label htmlFor="tag">
        Tag
        <select
          value={ value }
          name="tag"
          id="tag"
        >
          <option>Selecione uma opção</option>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <form>
          { this.renderValue(value) }
          { this.renderDescription(description) }
          { this.renderMoeda(currency) }
          { this.renderPagamento(method) }
          { this.renderTag(tag) }
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Expenses);
