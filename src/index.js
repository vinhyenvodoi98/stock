import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import Navbar from './components/Navbars';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Navbar />
    <App />
  </Provider>,

  document.getElementById('root')
);
