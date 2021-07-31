import React from 'react';
import { useFilterContext } from '../context/filterContext';
import GridView from './GridView';
import ListView from './ListView';

const PlayersList = () => {
  const { filteredPlayers: players } = useFilterContext();

  return <GridView players={players}>players list</GridView>;
};

export default PlayersList;
