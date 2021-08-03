import React from 'react';
import styled from 'styled-components';
import { formatMarketValue } from '../utils/helpers';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import indexImage from '../assets/indexPic';

const Player = ({
  player,
  positions,
  name,
  marketValue,
  id,
  image,
  featured
}) => {
  console.log('this is player: ', player);
  console.log('name: ', name);
  console.log('this id: ', id);

  return (
    <Wrapper>
      {/* <div>
        <img
          src='https://pngtree.com/freepng/tattered-brazilian-flag_6168303.html'
          alt='image23'
        />
      </div> */}
      <header>
        <h3>{name}</h3>
      </header>
      <div className='container'>
        <img src={image} alt={name} />
        <Link to={`/players/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{positions}</h5>
        {featured === true ? (
          <p>
            <del>{formatMarketValue(marketValue)}</del>
            <br />
            <ins>{formatMarketValue(marketValue * 0.8)}</ins>
          </p>
        ) : (
          <p>{formatMarketValue(marketValue)}</p>
        )}
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    justify-content: center;
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: bold;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;
export default Player;
