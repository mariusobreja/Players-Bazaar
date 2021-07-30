import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { PlayersProvider } from './context/playersContext';

ReactDOM.render(
  <PlayersProvider>
    <App />
  </PlayersProvider>,
  document.getElementById('root')
);
