import React from 'react';
import styled from 'styled-components';
import Player from './Player';

const GridView = ({ players }) => {
  return (
    <Wrapper>
      <div className='players-container'>
        {players.map((player) => {
          return <Player key={player.id} {...player} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .players-container {
    display: grid;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .players-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1100px) {
    .players-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
