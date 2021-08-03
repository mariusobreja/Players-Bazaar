import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/playersReducer';
import { players, singlePlayer } from '../utils/playersData';
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

const initialState = {
  isSidebarOpen: false,
  playersLoading: false,
  playersError: false,
  players: [],
  featuredPlayers: [],
  singlePlayerLoading: false,
  singlePlayerError: false,
  singlePlayers: [],
  singlePlayer: {}
};

const PlayersContext = React.createContext();

export const PlayersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchPlayers = async (inputPlayers) => {
    dispatch({ type: GET_PLAYERS_BEGIN });
    try {
      const players = inputPlayers;
      dispatch({ type: GET_PLAYERS_SUCCESS, payload: players });
    } catch (error) {
      dispatch({ type: GET_PLAYERS_ERROR });
    }
    return inputPlayers;
  };

  const fetchSinglePlayers = async (inputSinglePlayers) => {
    dispatch({ type: GET_SINGLE_PLAYER_BEGIN });
    try {
      const singlePlayer = inputSinglePlayers;
      dispatch({ type: GET_SINGLE_PLAYER_SUCCESS, payload: singlePlayer });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PLAYER_ERROR });
    }
    return inputSinglePlayers;
  };

  const fetchSinglePlayer = (id) => {
    dispatch({ type: GET_SINGLE_PLAYER_FINAL, payload: id });
  };

  useEffect(() => {
    fetchSinglePlayers(singlePlayer);
  }, []);

  useEffect(() => {
    fetchPlayers(players);
  }, []);

  return (
    <PlayersContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSinglePlayers,
        fetchSinglePlayer
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export const usePlayersContext = () => {
  return useContext(PlayersContext);
};
