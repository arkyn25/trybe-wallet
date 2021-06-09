// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, REQUEST_API, GET_QUOTES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      loading: true,
    };
  case GET_QUOTES:
    return {
      ...state,
      loading: false,
      currencies: action.data,
    };
  case ADD_EXPENSE:
    return { ...state,
      loading: false,
      expenses: [
        ...sate.expenses,
        {
          ...action.state,
          exchangeRates: state.currencies,
        },
      ],
    };
  default:
    return state;
  }
};

export default wallet;
