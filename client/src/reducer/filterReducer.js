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
    console.log('filter reducer:', action.payload);
    let maxValue = action.payload.map((v) => v.marketValue);
    maxValue = Math.max(...maxValue);

    return {
      ...state,
      allPlayers: [...action.payload],
      filteredPlayers: [...action.payload],
      filters: { ...state.filters, max_Value: maxValue, marketValue: maxValue }
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, gridView: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, gridView: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PLAYERS) {
    const { sort, filteredPlayers } = state;
    let tempPlayers = [...filteredPlayers];
    if (sort === 'marketValue-lowest') {
      tempPlayers = tempPlayers.sort((a, b) => a.marketValue - b.marketValue);
    }
    if (sort === 'marketValue-highest') {
      tempPlayers = tempPlayers.sort((a, b) => b.marketValue - a.marketValue);
    }
    if (sort === 'name-a') {
      tempPlayers = tempPlayers.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === 'name-z') {
      tempPlayers = tempPlayers.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filteredPlayers: tempPlayers };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PLAYERS) {
    const { allPlayers } = state;
    const { text, category, positions, foot, marketValue, injured } =
      state.filters;
    let tempPlayers = [...allPlayers];
    //start of filtering - text
    if (text) {
      tempPlayers = tempPlayers.filter((player) => {
        return player.name.toLowerCase().startsWith(text);
      });
    }
    //category
    if (category !== 'all') {
      tempPlayers = tempPlayers.filter(
        (player) => player.category === category
      );
    }
    //position
    if (positions !== 'all') {
      tempPlayers = tempPlayers.filter(
        (player) => player.positions === positions
      );
    }
    //foot
    if (foot !== 'all') {
      tempPlayers = tempPlayers.filter((player) => player.foot === foot);
    }
    //value
    tempPlayers = tempPlayers.filter(
      (player) => player.marketValue <= marketValue
    );
    //injured
    if (injured) {
      tempPlayers = tempPlayers.filter((player) => player.injured === true);
    }
    return { ...state, filteredPlayers: tempPlayers };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        category: 'all',
        positions: 'all',
        foot: 'all',
        marketValue: state.filters.max_Value,
        injured: false
      }
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filterReducer;
