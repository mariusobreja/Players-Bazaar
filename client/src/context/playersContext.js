import React, { useContext, useEffect, useReducer, useCallback } from 'react';
import axios from 'axios';
import reducer from '../reducer/playersReducer';
import { players as fallbackPlayers, singlePlayer } from '../utils/playersData';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PLAYERS_BEGIN,
  GET_PLAYERS_SUCCESS,
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
const API_BASE_URL = process.env.REACT_APP_API_URL || '';

export const PlayersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = useCallback(() => {
    dispatch({ type: SIDEBAR_OPEN });
  }, []);
  const closeSidebar = useCallback(() => {
    dispatch({ type: SIDEBAR_CLOSE });
  }, []);

  const fetchPlayers = useCallback(async () => {
    dispatch({ type: GET_PLAYERS_BEGIN });

    try {
      const { data } = await axios.get(`${API_BASE_URL}/api/players`, {
        params: {
          page: 1,
          limit: 100,
          sort: 'name-asc'
        }
      });

      dispatch({ type: GET_PLAYERS_SUCCESS, payload: data.data });
    } catch (error) {
      // Keep app usable if API is down while migrating.
      dispatch({ type: GET_PLAYERS_SUCCESS, payload: fallbackPlayers });
    }
  }, []);

  const fetchSinglePlayers = useCallback(async (inputSinglePlayers) => {
    dispatch({ type: GET_SINGLE_PLAYER_BEGIN });
    try {
      const singlePlayer = inputSinglePlayers;
      dispatch({ type: GET_SINGLE_PLAYER_SUCCESS, payload: singlePlayer });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PLAYER_ERROR });
    }
    return inputSinglePlayers;
  }, []);

  const fetchSinglePlayer = useCallback((id) => {
    dispatch({ type: GET_SINGLE_PLAYER_FINAL, payload: id });
  }, []);

  useEffect(() => {
    fetchSinglePlayers(singlePlayer);
  }, [fetchSinglePlayers]);

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

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
