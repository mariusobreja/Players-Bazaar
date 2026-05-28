import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import { PageHero, CartContent } from '../components';

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty-card'>
          <h2>Your cart is empty</h2>
          <p>Browse the marketplace and add players you want to negotiate for.</p>
          <Link to='/players' className='btn'>
            Browse players
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title='cart' />
      <Wrapper className='page'>
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  background: var(--clr-grey-9);

  .empty-card {
    width: min(92vw, 28rem);
    margin: 0 auto;
    padding: 3rem 2rem;
    text-align: center;
    background: var(--clr-white);
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius-lg);
    box-shadow: var(--card-shadow);

    h2 {
      margin-bottom: 0.5rem;
      text-transform: none;
    }

    p {
      margin-bottom: 1.5rem;
      color: var(--clr-grey-5);
    }
  }
`;

export default CartPage;
