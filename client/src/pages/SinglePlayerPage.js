import React, { useEffect } from 'react';
import styled from 'styled-components';
import { usePlayersContext } from '../context/playersContext';
import { formatMarketValue } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { singlePlayer } from '../utils/playersData';
import {
  Loading,
  Error,
  PageHero,
  PlayersImages,
  Stars,
  AddToCart
} from '../components';
import { useParams, useHistory } from 'react-router-dom';

const SinglePlayerPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    singlePlayerLoading: loading,
    singlePlayerError: error,
    fetchSinglePlayer
  } = usePlayersContext();

  useEffect(() => {
    fetchSinglePlayer(id);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    marketValue,
    description,
    injured,
    stars,
    club,
    nationalities,
    positions,
    id: reference,
    images,
    featured,
    goals
  } = singlePlayer[id];
  return (
    <Wrapper>
      <PageHero title={name} player />
      <div className='sectin section-center page'>
        <Link to='/players' className='btn'>
          back to players
        </Link>
        <div className='player-center'>
          <PlayersImages images={images} />
          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} goals={goals} />
            {featured === true ? (
              <h5 className='price'>
                <del>{formatMarketValue(marketValue)}</del>
                <br />
                <ins>{formatMarketValue(marketValue * 0.8)}</ins>
              </h5>
            ) : (
              <h5>{formatMarketValue(marketValue)}</h5>
            )}
            <p className='info'>
              <span>Bio: </span>
              {description}
            </p>
            <p className='info'>
              <span>Nationality: </span>
              {nationalities}
            </p>
            <p className='info'>
              <span>Position: </span>
              {positions}
            </p>
            <p className='info'>
              <span>Injured: </span>
              {injured === true ? 'Yes' : 'No'}
            </p>
            <p className='info'>
              <span>Our Reference: </span>
              {reference}
            </p>
            <p className='info'>
              <span>Current Club: </span>
              {club}
            </p>
            <hr />
            <AddToCart reference={reference} />
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .player-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .player-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SinglePlayerPage;
