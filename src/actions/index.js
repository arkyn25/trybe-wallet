// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export const salvarLogin = (email) => ({
  type: LOGIN,
  email,
});

export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const request = () => ({
  type: ADD_CURRENCIES,
});
