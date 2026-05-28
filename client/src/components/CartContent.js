import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className='section section-center'>
      <div className='cart-panel'>
        <CartColumns />
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <hr />
        <div className='link-container'>
          <Link to='/players' className='link-btn secondary'>
            Continue shopping
          </Link>
          <button
            type='button'
            className='link-btn ghost'
            onClick={clearCart}
          >
            Clear cart
          </button>
        </div>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 2rem;

  .cart-panel {
    background: var(--clr-white);
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius-lg);
    box-shadow: var(--card-shadow);
    padding: 1.5rem;
  }

  .link-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: space-between;
    margin-top: 1.5rem;
  }

  .link-btn {
    font-family: inherit;
    font-size: 0.85rem;
    font-weight: 600;
    padding: 0.55rem 1.1rem;
    border-radius: 999px;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    text-decoration: none;
  }

  .secondary {
    background: var(--clr-primary-10);
    color: var(--clr-primary-3);

    &:hover {
      background: var(--clr-primary-9);
      color: var(--clr-primary-2);
    }
  }

  .ghost {
    background: transparent;
    color: var(--clr-grey-4);
    border: 1px solid var(--clr-grey-8);

    &:hover {
      background: var(--clr-grey-9);
      color: var(--clr-grey-2);
    }
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr minmax(280px, 340px);
    align-items: start;
  }
`;

export default CartContent;
