import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cartContext';
import { useUserContext } from '../context/userContext';
import { formatMarketValue } from '../utils/helpers';
import { Link } from 'react-router-dom';

const CartTotals = () => {
  const { total_amount, our_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <Wrapper>
      <article>
        <h5 className='row'>
          <span>Subtotal</span>
          <span>{formatMarketValue(total_amount)}</span>
        </h5>
        <p className='row'>
          <span>Our fee</span>
          <span>{formatMarketValue(our_fee)}</span>
        </p>
        <hr />
        <h4 className='row total'>
          <span>Order total</span>
          <span>{formatMarketValue(total_amount + our_fee)}</span>
        </h4>
        {myUser ? (
          <Link to='/checkout' className='btn'>
            Proceed to checkout
          </Link>
        ) : (
          <button type='button' className='btn' onClick={loginWithRedirect}>
            Log in to checkout
          </button>
        )}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  article {
    background: var(--clr-white);
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius-lg);
    box-shadow: var(--card-shadow);
    padding: 1.75rem;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 0.75rem;
    font-weight: 500;
    color: var(--clr-grey-4);

    span:last-child {
      font-weight: 600;
      color: var(--clr-grey-2);
    }
  }

  .total {
    margin-top: 0.5rem;
    margin-bottom: 1.25rem;
    font-size: 1.1rem;
    color: var(--clr-grey-1);

    span:last-child {
      color: var(--clr-primary-4);
      font-size: 1.25rem;
    }
  }

  hr {
    margin: 1rem 0;
  }

  .btn {
    width: 100%;
    margin-top: 0.5rem;
  }
`;

export default CartTotals;
