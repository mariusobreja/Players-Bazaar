import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducer/filterReducer';
import {
  LOAD_PLAYERS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PLAYERS,
  UPDATE_FILTERS,
  FILTER_PLAYERS,
  CLEAR_FILTERS
} from '../actions';
import { usePlayersContext } from './playersContext';

const initialState = {
  filteredPlayers: [],
  allPlayers: []
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { players } = usePlayersContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PLAYERS, payload: players });
  }, [players]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
