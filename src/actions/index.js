// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const GET_QUOTES = 'GET_QUOTES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const DELETE_BTN = 'DELETE_BTN';
export const EDIT_BUTTON = 'EDIT_BUTTON';

export const salvarLogin = (email) => ({
  type: LOGIN,
  email,
});

export const requestAPI = () => ({
  type: REQUEST_API,
});

export const getQuotes = (data) => ({
  type: GET_QUOTES,
  data,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const deleteBtn = (id) => ({
  type: DELETE_BTN,
  id,
});

export const editButton = (id) => ({
  type: EDIT_BUTTON,
  id,
});

export const fetchCurrencies = (currencies) => ({
  type: FETCH_CURRENCIES,
  payload: currencies,
});

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then(
          (json) => dispatch(getQuotes(json)),
        ));
  };
}
