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
  CLEAR_FILTERS,
  GET_SINGLE_PLAYER_SUCCESS
} from '../actions';
import { usePlayersContext } from './playersContext';

const initialState = {
  filteredPlayers: [],
  allPlayers: [],
  gridView: true,
  sort: 'marketValue-lowest',
  filters: {
    text: '',
    positions: 'all',
    foot: 'all',
    min_Value: 0,
    max_Value: 0,
    marketValue: 0,
    injured: false
  }
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { players } = usePlayersContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PLAYERS, payload: players });
  }, [players]);
  console.log('filter provider:', players);

  useEffect(() => {
    dispatch({ type: SORT_PLAYERS });
  }, [players, state.sort]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    // const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (e) => {};

  const clearFilters = (e) => {};

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
