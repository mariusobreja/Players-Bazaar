import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { PlayersProvider } from './context/playersContext';
import { FilterProvider } from './context/filterContext';
import { CartProvider } from './context/cartContext';

ReactDOM.render(
  <PlayersProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </PlayersProvider>,
  document.getElementById('root')
);
