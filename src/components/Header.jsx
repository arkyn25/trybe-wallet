import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header
        className="wallet-info"
      >
        <h1>Trybe Wallet</h1>
        <span data-testid="email-field">{`${email}`}</span>
        <br />
        <span data-testid="header-currency-field">BRL</span>
        <span data-testid="total-field">
          { expenses.reduce((acc, curr) => {
            const { ask } = curr.exchangeRates[curr.currency];
            const expense = ask * curr.value;
            return acc + expense;
          }, 0).toFixed(2)}
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(Header);
