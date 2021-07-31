import React, { useEffect } from 'react';
import styled from 'styled-components';
import { usePlayersContext } from '../context/playersContext';
import { formatMarketValue } from '../utils/helpers';
import { Link } from 'react-router-dom';
import indexImage from '../assets/indexPic';
import { singlePlayer } from '../utils/playersData';
import { Loading, Error, PageHero } from '../components';
import { useParams, useHistory } from 'react-router-dom';

const SinglePlayerPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    singlePlayerLoading: loading,
    singlePlayerError: error,
    singlePlayer: player,
    fetchSinglePlayer
  } = usePlayersContext();

  useEffect(() => {
    fetchSinglePlayer(id);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  console.log(player);
  return <h4>single product page</h4>;
};

const Wrapper = styled.main`
  .product-center {
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
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SinglePlayerPage;
