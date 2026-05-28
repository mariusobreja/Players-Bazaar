import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { usePlayersContext } from '../context/playersContext';
import { useCartContext } from '../context/cartContext';
import { useUserContext } from '../context/userContext';

const CartLoginButtons = () => {
  const { closeSidebar } = usePlayersContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link
        to='/cart'
        className='cart-btn'
        onClick={closeSidebar}
        aria-label={`Cart, ${total_items} items`}
      >
        <FaShoppingCart />
        <span className='label'>Cart</span>
        {total_items > 0 && (
          <span className='cart-value'>{total_items}</span>
        )}
      </Link>
      {myUser ? (
        <button
          type='button'
          className='auth-btn logout'
          onClick={() => {
            clearCart();
            logout({ returnTo: window.location.origin });
          }}
        >
          Log out
        </button>
      ) : (
        <button type='button' className='auth-btn login' onClick={loginWithRedirect}>
          <FaUser />
          <span>Log in</span>
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  .cart-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.5rem 0.9rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--clr-grey-2);
    background: var(--clr-grey-10);
    border: none;
    border-radius: 999px;
    transition: var(--transition);

    svg {
      font-size: 1rem;
      color: var(--clr-primary-4);
    }

    &:hover {
      background: var(--clr-primary-10);
      color: var(--clr-primary-3);
    }
  }

  .cart-value {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.35rem;
    height: 1.35rem;
    padding: 0 0.35rem;
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--clr-white);
    background: var(--clr-primary-5);
    border-radius: 999px;
  }

  .auth-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 1rem;
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 600;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    transition: var(--transition);
  }

  .auth-btn.login {
    color: var(--clr-white);
    background: linear-gradient(135deg, var(--clr-primary-4), var(--clr-primary-5));
    box-shadow: 0 2px 10px rgba(16, 185, 129, 0.3);

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);
    }
  }

  .auth-btn.logout {
    color: var(--clr-grey-3);
    background: transparent;

    &:hover {
      color: var(--clr-red-dark);
      background: #fef2f2;
    }
  }

  @media (max-width: 991px) {
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--clr-grey-8);

    .cart-btn,
    .auth-btn {
      width: 100%;
      justify-content: center;
    }
  }
`;

export default CartLoginButtons;
