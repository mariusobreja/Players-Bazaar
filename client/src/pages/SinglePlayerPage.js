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
  }, [fetchSinglePlayer, id]);

  useEffect(() => {
    let timeoutId;
    if (error) {
      timeoutId = setTimeout(() => {
        history.push('/');
      }, 3000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [error, history]);

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
      <div className='section section-center page'>
        <Link to='/players' className='back-link'>
          ← Back to players
        </Link>
        <div className='player-center'>
          <div className='media-card'>
            <PlayersImages images={images} />
          </div>
          <section className='content'>
            <div className='content-header'>
              <h2>{name}</h2>
              {featured && <span className='badge'>Featured deal</span>}
            </div>
            <Stars stars={stars} goals={goals} />
            {featured === true ? (
              <p className='price'>
                <del>{formatMarketValue(marketValue)}</del>
                <ins>{formatMarketValue(marketValue * 0.8)}</ins>
              </p>
            ) : (
              <p className='price solo'>{formatMarketValue(marketValue)}</p>
            )}
            <dl className='details'>
              <div>
                <dt>Bio</dt>
                <dd>{description}</dd>
              </div>
              <div>
                <dt>Nationality</dt>
                <dd>{nationalities}</dd>
              </div>
              <div>
                <dt>Position</dt>
                <dd>{positions}</dd>
              </div>
              <div>
                <dt>Injured</dt>
                <dd>{injured === true ? 'Yes' : 'No'}</dd>
              </div>
              <div>
                <dt>Reference</dt>
                <dd>{reference}</dd>
              </div>
              <div>
                <dt>Current club</dt>
                <dd>{club}</dd>
              </div>
            </dl>
            <AddToCart reference={reference} />
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-grey-9);
  padding-bottom: 3rem;

  .back-link {
    display: inline-block;
    margin-top: 1.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--clr-primary-4);
    transition: var(--transition);

    &:hover {
      color: var(--clr-primary-2);
    }
  }

  .player-center {
    display: grid;
    gap: 2rem;
    margin-top: 1.5rem;
  }

  .media-card,
  .content {
    background: var(--clr-white);
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius-lg);
    box-shadow: var(--card-shadow);
    overflow: hidden;
  }

  .media-card {
    padding: 1rem;
  }

  .content {
    padding: 1.75rem;
  }

  .content-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.5rem;

    h2 {
      margin: 0;
      font-size: 1.75rem;
      color: var(--clr-grey-1);
    }
  }

  .badge {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 0.35rem 0.65rem;
    border-radius: 999px;
    background: var(--clr-primary-10);
    color: var(--clr-primary-3);
  }

  .price {
    margin: 1rem 0 1.5rem;
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--clr-primary-4);

    del {
      color: var(--clr-grey-5);
      font-weight: 500;
      font-size: 1rem;
      margin-right: 0.5rem;
    }

    ins {
      text-decoration: none;
      color: var(--clr-primary-3);
    }

    &.solo {
      color: var(--clr-grey-1);
    }
  }

  .details {
    display: grid;
    gap: 1rem;
    margin-bottom: 1.5rem;

    div {
      display: grid;
      gap: 0.25rem;
    }

    dt {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--clr-grey-5);
    }

    dd {
      margin: 0;
      color: var(--clr-grey-2);
      line-height: 1.6;
    }
  }

  @media (min-width: 992px) {
    .player-center {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
  }
`;

export default SinglePlayerPage;
