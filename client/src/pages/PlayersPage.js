import React from 'react';
import styled from 'styled-components';
import {
  Filters,
  PlayersList,
  Sort,
  PageHero,
  Loading,
  Error
} from '../components';
import { usePlayersContext } from '../context/playersContext';

const PlayersPage = () => {
  const { playersLoading: loading, playersError: error } = usePlayersContext();

  return (
    <main>
      <PageHero title='players/' />
      <Wrapper className='page'>
        {loading ? (
          <Loading message='Loading players...' />
        ) : error ? (
          <Error message='We could not load players right now. Please refresh and try again.' />
        ) : (
          <div className='section-center players'>
            <Filters />
            <div>
              <Sort />
              <PlayersList />
            </div>
          </div>
        )}
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
