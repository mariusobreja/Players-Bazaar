import {
  LOAD_PLAYERS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PLAYERS,
  UPDATE_FILTERS,
  FILTER_PLAYERS,
  CLEAR_FILTERS
} from '../actions';

const filterReducer = (state, action) => {
  if (action.type === LOAD_PLAYERS) {
    return {
      ...state,
      allPlayers: [...action.payload],
      filteredPlayers: [...action.payload]
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filterReducer;
