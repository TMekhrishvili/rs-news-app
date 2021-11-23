import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_API_KEY}`;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
