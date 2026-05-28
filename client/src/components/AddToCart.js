import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';
import AmountButtons from './AmountButtons';

const AddToCart = ({ reference }) => {
  const { addToCart } = useCartContext();
  const id = reference;

  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className='btn-container'>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link to='/cart' className='btn' onClick={() => addToCart(id, amount)}>
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--clr-grey-8);

  .btn-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }

  .btn {
    flex: 1;
    min-width: 10rem;
    text-align: center;
  }
`;
export default AddToCart;
