import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, addExpense } from '../actions';

class Expenses extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: '',
    };

    this.renderizaSelectMoeda = this.renderMoeda.bind(this);
    this.renderizaSelectPgto = this.renderMethod.bind(this);
    this.renderizaSelectTag = this.renderTag.bind(this);
    this.renderizaInput = this.renderInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  handleClick() {
    const { addDespesas, getCurrency } = this.props;

    this.setState((prev) => ({
      id: prev.id + 1,
      value: 0,
      description: '',
    }));

    addDespesas(this.state);
    getCurrency();
  }

  renderInput() {
    const { value } = this.state;
    return (
      <input
        type="text"
        data-testid="value-input"
        id="valor"
        value={ value }
        onChange={ (e) => this.setState({ value: e.target.value }) }
      />
    );
  }

  renderMoeda() {
    const { currencies, loading } = this.props;
    const { currency } = this.state;
    return (
      <select
        data-testid="currency-input"
        id="moeda"
        value={ currency }
        onChange={ (e) => this.setState({ currency: e.target.value }) }
      >
        { loading ? null : Object.keys(currencies).filter(
          (result) => result !== 'USDT',
        ).map((result, index) => (
          <option
            key={ index }
            value={ result }
            data-testid={ result }
          >
            { result }
          </option>
        ))}
      </select>
    );
  }

  renderMethod() {
    const { method } = this.state;
    return (
      <select
        data-testid="method-input"
        value={ method }
        id="pgto"
        onChange={ (e) => this.setState({ method: e.target.value }) }
      >
        <option key="dinheiro" value="Dinheiro">Dinheiro</option>
        <option
          key="Cartão de crédito"
          value="Cartão de crédito"
        >
          Cartão de crédito
        </option>
        <option value="Cartão de débito" key="Cartão de débito">Cartão de débito</option>
      </select>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <select
        data-testid="tag-input"
        value={ tag }
        id="tag"
        onChange={ (e) => this.setState({ tag: e.target.value }) }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    );
  }

  render() {
    const { description } = this.state;
    return (
      <div>
        <label htmlFor="valor">
          Valor
          {this.renderInput()}
        </label>
        <label
          htmlFor="moeda"
        >
          Moeda
          {this.renderMoeda()}
        </label>
        <label
          htmlFor="pgto"
        >
          Método de pagamento
          {this.renderMethod()}
        </label>
        <label
          htmlFor="tag"
        >
          Tag
          {this.renderTag()}
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            id="descricao"
            data-testid="description-input"
            value={ description }
            onChange={ (e) => this.setState({ description: e.target.value }) }
          />
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  loading: state.wallet.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchAPI()),
  addDespesas: (state) => dispatch(
    addExpense(state),
  ),
});

Expenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCurrency: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  addDespesas: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
