import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { PlayersProvider } from './context/playersContext';
import { FilterProvider } from './context/filterContext';

ReactDOM.render(
  <PlayersProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </PlayersProvider>,
  document.getElementById('root')
);
