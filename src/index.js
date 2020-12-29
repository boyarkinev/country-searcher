// Стили
import './index.css';

// Компоненты React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


// Компоненты приложения
import App from './components/App';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
