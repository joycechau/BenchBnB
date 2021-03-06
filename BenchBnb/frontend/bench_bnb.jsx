import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, signup, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
  // const store = configureStore();
  // window.store = store;
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
