import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Error = ({ message = 'Something went wrong. Please try again.' }) => {
  return (
    <Wrapper className='section section-center text-center'>
      <h2>Unable to load content</h2>
      <p>{message}</p>
      <Link to='/' className='btn'>
        back to home
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3rem 1rem;

  h2 {
    margin-bottom: 0.75rem;
    text-transform: capitalize;
  }

  p {
    color: var(--clr-grey-5);
    margin-bottom: 1.5rem;
    max-width: 28rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Error;
