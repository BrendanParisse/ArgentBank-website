import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Importez le composant Provider
import store from './_Store/store.js'; // Importez votre store Redux
import '../src/Assets/css/main.min.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);