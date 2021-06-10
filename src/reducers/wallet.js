// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE,
  REQUEST_API,
  GET_QUOTES,
  DELETE_BTN,
  EDIT_BUTTON } from '../actions/index';

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
        ...state.expenses,
        {
          ...action.state,
          exchangeRates: state.currencies,
        },
      ],
    };
  case EDIT_BUTTON:
    return { ...state,
      loading: false,
      expenses: action.state,
    };
  case DELETE_BTN:
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
