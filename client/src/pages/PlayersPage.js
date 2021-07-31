import React from 'react';
import styled from 'styled-components';
import { Filters, PlayersList, Sort, PageHero } from '../components';

const PlayersPage = () => {
  return (
    <main>
      <PageHero title='players/' />
      <Wrapper className='page'>
        <div className='section-center players'>
          <Filters />
          <div>
            <Sort />
            <PlayersList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .players {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .players {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default PlayersPage;
