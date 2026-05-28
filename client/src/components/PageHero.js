import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageHero = ({ title, player }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <nav className='breadcrumbs' aria-label='Breadcrumb'>
          <Link to='/'>Home</Link>
          {player && (
            <>
              <span className='sep'>/</span>
              <Link to='/players'>Players</Link>
            </>
          )}
          <span className='sep'>/</span>
          <span className='current'>{title}</span>
        </nav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  padding: 1.25rem 0;
  background: linear-gradient(135deg, var(--clr-grey-1) 0%, #1e3a5f 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  .breadcrumbs {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.9rem;
    font-weight: 500;
  }

  a {
    color: var(--clr-grey-7);
    transition: var(--transition);

    &:hover {
      color: var(--clr-primary-6);
    }
  }

  .sep {
    color: var(--clr-grey-5);
    user-select: none;
  }

  .current {
    color: var(--clr-white);
    text-transform: capitalize;
  }
`;

export default PageHero;
