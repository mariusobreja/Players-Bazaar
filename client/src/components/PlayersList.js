import React from 'react';
import { useFilterContext } from '../context/filterContext';
import GridView from './GridView';
import ListView from './ListView';

const PlayersList = () => {
  const { filteredPlayers: players, gridView } = useFilterContext();
  if (players.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no players matched your search...
      </h5>
    );
  }
  if (gridView === false) {
    return <ListView players={players} />;
  }
  return <GridView players={players}>players list</GridView>;
};

export default PlayersList;
