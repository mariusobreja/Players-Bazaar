import React from 'react';
import styled from 'styled-components';
import { formatMarketValue } from '../utils/helpers';
import { Link } from 'react-router-dom';
import indexImage from '../assets/indexPic';

const ListView = ({ players }) => {
  return (
    <Wrapper>
      {players.map((player) => {
        const { id, name, marketValue, description, image, featured } = player;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              {featured === true ? (
                <h5 className='price'>
                  <del>{formatMarketValue(marketValue)}</del>
                  <br />
                  <ins>{formatMarketValue(marketValue * 0.8)}</ins>
                </h5>
              ) : (
                <h5 className='price'>{formatMarketValue(marketValue)}</h5>
              )}
              {/* <h5 className='price'>{formatMarketValue(marketValue)}</h5> */}
              <p>{description}</p>
              <Link to={`players/${id}`} className='btn'>
                Details
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
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
