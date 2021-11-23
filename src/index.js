import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";
import { store } from './shared/store';
import { Provider } from 'react-redux';
import './shared/css/reset.css';
import './shared/css/index.css';

axios.defaults.baseURL = 'https://newsapi.org/' //process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Authorization'] = `Bearer 252f1ab95e8445d7a107b8eca39a02be`//${process.env.REACT_APP_API_KEY}`;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);