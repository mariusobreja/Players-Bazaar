import React from 'react';
import logo from '../assets/B.svg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { links } from '../utils/constants';
import { FaTimes } from 'react-icons/fa';
import CartLoginButtons from './CartLoginButtons';
import { usePlayersContext } from '../context/playersContext';
import { useUserContext } from '../context/userContext';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = usePlayersContext();
  const { myUser } = useUserContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <img src={logo} className='logo' alt='Players Bazaar' />
          <button
            className='close-btn'
            type='button'
            onClick={closeSidebar}
            aria-label='Close menu'
          >
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink
                  to={url}
                  activeClassName='active'
                  exact={url === '/'}
                  onClick={closeSidebar}
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
          {myUser && (
            <li>
              <NavLink
                to='/checkout'
                activeClassName='active'
                onClick={closeSidebar}
              >
                Checkout
              </NavLink>
            </li>
          )}
        </ul>
        <CartLoginButtons />
      </aside>
      {isSidebarOpen && (
        <button
          type='button'
          className='backdrop'
          onClick={closeSidebar}
          aria-label='Close menu overlay'
        />
      )}
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid var(--clr-grey-8);
  }

  .close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.25rem;
    background: var(--clr-grey-10);
    border: none;
    border-radius: var(--radius);
    color: var(--clr-grey-3);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background: #fef2f2;
      color: var(--clr-red-dark);
    }
  }

  .logo {
    height: 40px;
  }

  .links {
    padding: 1rem 0;
  }

  .links a {
    display: block;
    padding: 0.85rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    text-transform: capitalize;
    color: var(--clr-grey-3);
    transition: var(--transition);

    &:hover,
    &.active {
      color: var(--clr-primary-4);
      background: var(--clr-primary-10);
    }
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: min(320px, 85vw);
    height: 100%;
    background: var(--clr-white);
    box-shadow: var(--dark-shadow);
    transition: transform 0.3s ease;
    transform: translateX(-100%);
    z-index: 1000;
    overflow-y: auto;
  }

  .show-sidebar {
    transform: translateX(0);
  }

  .backdrop {
    position: fixed;
    inset: 0;
    z-index: 999;
    background: rgba(15, 23, 42, 0.5);
    border: none;
    cursor: pointer;
  }

  .cart-btn-wrapper {
    padding: 1rem 1.5rem 1.5rem;
    border-top: 1px solid var(--clr-grey-8);
  }

  @media screen and (min-width: 992px) {
    .sidebar,
    .backdrop {
      display: none;
    }
  }
`;

export default Sidebar;
