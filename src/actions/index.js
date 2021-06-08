// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';

export const salvarLogin = (email) => ({
  type: LOGIN,
  email,
});

export const addExpenses = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const fetchCurrencies = (currencies) => ({
  type: FETCH_CURRENCIES,
  payload: currencies,
});

export async function requestCurrencies() {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
