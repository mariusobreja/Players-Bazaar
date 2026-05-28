import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Wrapper className='page-100'>
      <section>
        <p className='code'>404</p>
        <h1>Page not found</h1>
        <p className='lead'>
          The page you tried to open does not exist or may have moved.
        </p>
        <Link to='/' className='btn'>
          Back to home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-grey-9);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  section {
    max-width: 24rem;
    padding: 2rem;
  }

  .code {
    font-size: 5rem;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, var(--clr-primary-4), var(--clr-primary-6));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .lead {
    margin-bottom: 1.5rem;
    color: var(--clr-grey-5);
  }
`;

export default ErrorPage;
