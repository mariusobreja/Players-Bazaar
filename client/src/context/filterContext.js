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
  allPlayers: [],
  gridView: true,
  sort: 'marketValue-lowest',
  filters: {
    text: '',
    category: 'all',
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

  useEffect(() => {
    dispatch({ type: FILTER_PLAYERS });
    dispatch({ type: SORT_PLAYERS });
  }, [players, state.sort, state.filters]);

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

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'marketValue') {
      value = Number(value);
    }
    if (name === '!injured') {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

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
