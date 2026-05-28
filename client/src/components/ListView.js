import React from 'react';
import styled from 'styled-components';
import { formatMarketValue } from '../utils/helpers';
import { Link } from 'react-router-dom';

const ListView = ({ players }) => {
  return (
    <Wrapper>
      {players.map((player) => {
        const { id, name, marketValue, description, image, featured } = player;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div className='body'>
              <div className='top'>
                <h4>{name}</h4>
                {featured && <span className='badge'>Featured</span>}
              </div>
              {featured === true ? (
                <p className='price'>
                  <del>{formatMarketValue(marketValue)}</del>
                  <ins>{formatMarketValue(marketValue * 0.8)}</ins>
                </p>
              ) : (
                <p className='price solo'>{formatMarketValue(marketValue)}</p>
              )}
              <p className='desc'>{description}</p>
              <Link to={`players/${id}`} className='btn btn-outline'>
                View details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 1.25rem;

  article {
    display: grid;
    gap: 1.25rem;
    padding: 1.25rem;
    background: var(--clr-white);
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius-lg);
    box-shadow: var(--card-shadow);
    transition: var(--transition);

    &:hover {
      box-shadow: var(--dark-shadow);
    }
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: var(--radius);
  }

  .top {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.35rem;
  }

  h4 {
    margin: 0;
    font-size: 1.15rem;
    color: var(--clr-grey-1);
  }

  .badge {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    background: var(--clr-primary-10);
    color: var(--clr-primary-3);
  }

  .price {
    font-weight: 700;
    color: var(--clr-primary-4);
    margin-bottom: 0.5rem;

    del {
      color: var(--clr-grey-5);
      font-weight: 500;
      font-size: 0.9rem;
      margin-right: 0.35rem;
    }

    ins {
      text-decoration: none;
    }

    &.solo {
      color: var(--clr-grey-2);
    }
  }

  .desc {
    font-size: 0.95rem;
    color: var(--clr-grey-4);
    line-height: 1.65;
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .btn-outline {
    width: fit-content;
    font-size: 0.85rem;
    padding: 0.5rem 1.25rem;
  }

  @media (min-width: 768px) {
    article {
      grid-template-columns: 240px 1fr;
      align-items: center;
    }

    img {
      height: 100%;
      min-height: 180px;
    }
  }
`;

export default ListView;
