import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PLAYERS_BEGIN,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_ERROR,
  GET_SINGLE_PLAYER_BEGIN,
  GET_SINGLE_PLAYER_SUCCESS,
  GET_SINGLE_PLAYER_ERROR,
  GET_SINGLE_PLAYER_FINAL
} from '../actions';

const playersReducer = (state, action) => {
  console.log('reducer executing', action);
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_PLAYERS_BEGIN) {
    return { ...state, playersLoading: true };
  }
  if (action.type === GET_PLAYERS_SUCCESS) {
    const featuredPlayers = action.payload.filter(
      (player) => player.featured === true
    );
    return {
      ...state,
      playersLoading: false,
      players: action.payload,
      featuredPlayers
    };
  }
  console.log('action= ', action.type);
  if (action.type === GET_PLAYERS_ERROR) {
    return { ...state, playersLoading: false, playersError: true };
  }
  if (action.type === GET_SINGLE_PLAYER_BEGIN) {
    return { ...state, singlePlayerLoading: true, singlePlayerError: false };
  }
  if (action.type === GET_SINGLE_PLAYER_SUCCESS) {
    console.log('playersReducer: ', action.payload);
    return {
      ...state,
      singlePlayerLoading: false,
      singlePlayers: action.payload
    };
  }
  if (action.type === GET_SINGLE_PLAYER_ERROR) {
    return { ...state, singlePlayerLoading: false, singlePlayerError: true };
  }
  if (action.type === GET_SINGLE_PLAYER_FINAL) {
    const filteredPlayers = state.singlePlayers.filter((e) => {
      console.log('id= ', action.payload);
      return e.id === action.payload;
    });
    return { ...state, filteredPlayer: filteredPlayers };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default playersReducer;
