import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from './components/AlertTemplate/AlertTemplate';
export const store = configureStore();

export const history = createBrowserHistory();
const options = {
  position: positions.TOP_CENTER,
  timeout: 2000,
  offset: '30px',
  transition: transitions.SCALE,
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </AlertProvider>,
  document.getElementById('root')
);
