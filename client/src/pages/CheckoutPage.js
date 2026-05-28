import React from 'react';
import styled from 'styled-components';
import { PageHero, StripeCheckout } from '../components';
import { useCartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page section-center'>
        {cart.length < 1 ? (
          <div className='empty-card'>
            <h2>Nothing to checkout yet</h2>
            <p>Add players to your cart before completing payment.</p>
            <Link to='/players' className='btn'>
              Browse players
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  background: var(--clr-grey-9);
  padding-bottom: 3rem;

  .empty-card {
    max-width: 28rem;
    margin: 2rem auto 0;
    padding: 3rem 2rem;
    text-align: center;
    background: var(--clr-white);
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius-lg);
    box-shadow: var(--card-shadow);

    h2 {
      text-transform: none;
      margin-bottom: 0.5rem;
    }

    p {
      margin-bottom: 1.5rem;
      color: var(--clr-grey-5);
    }
  }
`;

export default CheckoutPage;
