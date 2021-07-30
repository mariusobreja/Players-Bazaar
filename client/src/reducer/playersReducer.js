import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PLAYERS_BEGIN,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_ERROR
  // GET_SINGLE_PLAYER_BEGIN,
  // GET_SINGLE_PLAYER_SUCCESS,
  // GET_SINGLE_PLAYER_ERROR
} from '../actions';

const playersReducer = (state, action) => {
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
      (player) => player.featured === 'true'
    );
    return {
      ...state,
      playersLoading: false,
      players: action.payload,
      featuredPlayers
    };
  }
  if (action.type === GET_PLAYERS_ERROR) {
    return { ...state, playersLoading: false, playersError: true };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default playersReducer;
