import React from 'react';
import styled from 'styled-components';
import { formatMarketValue } from '../utils/helpers';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Player = ({ positions, name, marketValue, id, image, featured }) => {
  return (
    <Wrapper>
      <div className='media'>
        <img src={image} alt={name} />
        {featured && <span className='badge'>Featured</span>}
        <Link to={`/players/${id}`} className='overlay' aria-label={`View ${name}`}>
          <FaArrowRight />
        </Link>
      </div>
      <div className='body'>
        <h3>{name}</h3>
        <p className='position'>{positions}</p>
        <div className='price'>
          {featured ? (
            <>
              <span className='old'>{formatMarketValue(marketValue)}</span>
              <span className='current'>
                {formatMarketValue(marketValue * 0.8)}
              </span>
            </>
          ) : (
            <span className='current'>{formatMarketValue(marketValue)}</span>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--clr-white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--clr-grey-8);
  box-shadow: var(--card-shadow);
  overflow: hidden;
  transition: var(--transition);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--dark-shadow);
  }

  .media {
    position: relative;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: var(--clr-grey-9);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  .badge {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    padding: 0.25rem 0.65rem;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--clr-white);
    background: var(--clr-primary-4);
    border-radius: 999px;
  }

  .overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(15, 23, 42, 0.45);
    opacity: 0;
    transition: var(--transition);
    color: var(--clr-white);
    font-size: 1.5rem;
  }

  &:hover .overlay {
    opacity: 1;
  }

  .body {
    padding: 1.1rem 1.15rem 1.25rem;
  }

  h3 {
    margin-bottom: 0.25rem;
    font-size: 1.05rem;
    line-height: 1.3;
  }

  .position {
    margin-bottom: 0.75rem;
    font-size: 0.85rem;
    color: var(--clr-grey-5);
  }

  .price {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .old {
    font-size: 0.8rem;
    color: var(--clr-grey-5);
    text-decoration: line-through;
  }

  .current {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--clr-primary-4);
  }
`;

export default Player;
