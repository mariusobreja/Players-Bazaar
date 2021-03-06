import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cartContext';
import { useUserContext } from '../context/userContext';
import { formatMarketValue } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { singlePlayer } from '../utils/playersData';

// const discounted = singlePlayer[4].featured;
const CartTotals = () => {
  let { total_amount, our_fee } = useCartContext();

  const { myUser, loginWithRedirect } = useUserContext();
  // const newTotalAmount = () => {
  // //   if (discounted === true) {
  // //     return total_amount * 0.8;
  // //   }
  // //   return total_amount;
  // // };

  // total_amount = newTotalAmount(total_amount);
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatMarketValue(total_amount)}</span>
          </h5>
          <p>
            our fee : <span>{formatMarketValue(our_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :{' '}
            <span>{formatMarketValue(total_amount + our_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to='/checkout' className='btn'>
            proceed to checkout
          </Link>
        ) : (
          <button type='button' className='btn' onClick={loginWithRedirect}>
            login
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
