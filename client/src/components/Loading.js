import React from 'react';
import styled from 'styled-components';

const Loading = ({ message = 'Loading...' }) => {
  return (
    <Wrapper className='section section-center'>
      <div className='loading' aria-hidden='true' />
      <p>{message}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  padding: 3rem 1rem;

  p {
    margin-top: 1rem;
    color: var(--clr-grey-5);
    letter-spacing: var(--spacing);
    text-transform: capitalize;
  }
`;

export default Loading;
