import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/main.scss';
import Hangy from './components/Hangy';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Hangy />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
