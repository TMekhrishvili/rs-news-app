import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";
import { store } from './shared/store';
import { Provider } from 'react-redux';

axios.defaults.baseURL = 'https://newsapi.org/' //process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Authorization'] = `Bearer 252f1ab95e8445d7a107b8eca39a02be`//${process.env.REACT_APP_API_KEY}`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);