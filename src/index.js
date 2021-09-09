import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './App';
import AppContextProvider from './components/Context';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
