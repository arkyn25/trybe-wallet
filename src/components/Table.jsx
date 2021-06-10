import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBtn, editButton } from '../actions';

class Table extends React.Component {
  constructor() {
    super();

    this.renderTable = this.renderTable.bind(this);
  }

  renderTable() {
    const { expenses, deleteItem } = this.props;

    return expenses.map((item) => {
      const { id, description, tag,
        method, value, currency, exchangeRates } = item;

      const totalValue = exchangeRates[currency].ask * value;

      return (
        <tr key={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{exchangeRates[currency].name.split('/')[0]}</td>
          <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
          <td>{parseFloat(totalValue).toFixed(2)}</td>
          <td>Real</td>
          <td>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ () => { deleteItem(id); } }
            >
              Excluir
            </button>
            <button
              type="button"
              data-testid="edit-btn"
              onClick={ () => { editButton(item, true); } }
            >
              Editar
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteBtn(id)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
