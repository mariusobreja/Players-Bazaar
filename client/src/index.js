import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { PlayersProvider } from './context/playersContext';
import { FilterProvider } from './context/filterContext';
import { CartProvider } from './context/cartContext';
import { UserProvider } from './context/userContext';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain='dev-3ofust48.us.auth0.com'
    clientId='qIOOgHK36lZD3RdNXwgLubmaKGVwRESq'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <PlayersProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </PlayersProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
