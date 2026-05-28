import React from 'react';
import { usePlayersContext } from '../context/playersContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
    return <Loading message='Loading featured players...' />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className='section'>
      <div className='section-center'>
        <div className='title'>
          <p className='eyebrow'>Limited offers</p>
          <h2>Featured players</h2>
          <div className='underline' />
          <p className='subtitle'>
            Hand-picked talent with exclusive transfer fees this week.
          </p>
        </div>
        <div className='featured'>
          {featured.map((player) => (
            <Player key={player.id} player={player} {...player} />
          ))}
        </div>
        <Link to='/players' className='btn'>
          View all players
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-white);
  border-top: 1px solid var(--clr-grey-8);
  border-bottom: 1px solid var(--clr-grey-8);

  .title {
    margin-bottom: 2.5rem;
  }

  .eyebrow {
    display: inline-block;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--clr-primary-4);
  }

  .subtitle {
    max-width: 28rem;
    margin: 1rem auto 0;
    font-size: 1rem;
    color: var(--clr-grey-5);
  }

  .featured {
    display: grid;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .btn {
    display: block;
    width: fit-content;
    margin: 0 auto;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
  }
`;

export default FeaturedPlayers;
