import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import HttpService from './services/HttpService';
import UserService from './services/UserService';
import reportWebVitals from './reportWebVitals';

const renderApp = () => ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

UserService.initKeycloak(renderApp);
HttpService.configure();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
