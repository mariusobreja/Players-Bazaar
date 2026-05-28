import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()}{' '}
        <span>Players Bazaar</span> · Portfolio demo · All rights reserved
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 1.75rem 1.5rem;
  background: var(--clr-grey-1);
  text-align: center;

  p {
    margin: 0;
    font-size: 0.875rem;
    color: var(--clr-grey-6);
  }

  span {
    color: var(--clr-primary-6);
    font-weight: 600;
  }
`;

export default Footer;
