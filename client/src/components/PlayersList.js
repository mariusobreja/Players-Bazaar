import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useFilterContext } from '../context/filterContext';
import GridView from './GridView';
import ListView from './ListView';

const PlayersList = () => {
  const { filteredPlayers: players, gridView } = useFilterContext();
  if (players.length < 1) {
    return (
      <EmptyState>
        <h3>No players matched your filters</h3>
        <p>Try clearing filters or searching with a different name.</p>
        <Link to='/players' className='btn'>
          reset view
        </Link>
      </EmptyState>
    );
  }
  if (gridView === false) {
    return <ListView players={players} />;
  }
  return <GridView players={players} />;
};

const EmptyState = styled.div`
  text-align: center;
  padding: 2.5rem 1.5rem;
  border: 1px dashed var(--clr-grey-8);
  border-radius: var(--radius);
  background: var(--clr-grey-10);

  h3 {
    margin-bottom: 0.75rem;
    text-transform: capitalize;
  }

  p {
    color: var(--clr-grey-5);
    margin-bottom: 1.25rem;
  }
`;

export default PlayersList;
