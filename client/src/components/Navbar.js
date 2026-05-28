import React from 'react';
import styled from 'styled-components';
import logo from '../assets/B.svg';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { links } from '../utils/constants';
import CartLoginButtons from './CartLoginButtons';
import { usePlayersContext } from '../context/playersContext';
import { useUserContext } from '../context/userContext';

const Navbar = () => {
  const { openSidebar } = usePlayersContext();
  const { myUser } = useUserContext();

  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/' className='logo-link'>
            <img src={logo} alt='Players Bazaar' />
          </Link>
          <button
            type='button'
            className='nav-toggle'
            onClick={openSidebar}
            aria-label='Open menu'
          >
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink to={url} activeClassName='active' exact={url === '/'}>
                  {text}
                </NavLink>
              </li>
            );
          })}
          {myUser && (
            <li>
              <NavLink to='/checkout' activeClassName='active'>
                Checkout
              </NavLink>
            </li>
          )}
        </ul>
        <CartLoginButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--clr-grey-8);
  box-shadow: var(--light-shadow);

  .nav-center {
    width: min(92vw, var(--max-width));
    margin: 0 auto;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 140px;
      height: auto;
    }
  }

  .nav-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    background: var(--clr-grey-10);
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    color: var(--clr-grey-2);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background: var(--clr-grey-9);
      color: var(--clr-primary-4);
    }

    svg {
      font-size: 1.25rem;
    }
  }

  .nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-links,
  .cart-btn-wrapper {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .nav-header {
      justify-content: flex-start;
    }

    .nav-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
    }

    .nav-links {
      display: flex;
      flex: 1;
      justify-content: center;
      gap: 0.25rem;
      margin: 0;
      padding: 0;
      list-style: none;

      a {
        padding: 0.5rem 1rem;
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--clr-grey-4);
        border-radius: 999px;
        transition: var(--transition);
        text-transform: capitalize;

        &:hover {
          color: var(--clr-grey-1);
          background: var(--clr-grey-10);
        }

        &.active {
          color: var(--clr-primary-3);
          background: var(--clr-primary-10);
          font-weight: 600;
        }
      }
    }

    .cart-btn-wrapper {
      display: flex;
      flex-shrink: 0;
      align-items: center;
    }
  }
`;

export default Navbar;
