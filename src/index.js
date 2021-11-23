import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";
import { store } from './shared/store';
import { Provider } from 'react-redux';
import './shared/css/reset.css';
import './shared/css/index.css';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_API_KEY}`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);