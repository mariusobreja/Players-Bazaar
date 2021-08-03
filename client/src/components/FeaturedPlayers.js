import React from 'react';
import { usePlayersContext } from '../context/playersContext';
import styled from 'styled-components';
import Error from './Error';
import Loading from './Loading';
import Player from './Player';

const FeaturedPlayers = () => {
  const {
    playersLoading: loading,
    playersError: error,
    featuredPlayers: featured
  } = usePlayersContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>discounted players</h2>
        <div className='underline'></div>
        <div className='section-center featured'>
          {featured.map((player) => {
            return <Player key={player.id} player={player} {...player} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 100%;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedPlayers;
