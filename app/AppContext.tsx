'use client';
import React, { createContext, useReducer, ReactNode } from 'react';
import { ACTION_TYPE, initialState } from './constants/ui.constants';
import { Action, AppState } from '@/types';

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case ACTION_TYPE.TOGGLE_SIDEBAR:
      return {
        ...state,
        isSideBarOpen: !state.isSideBarOpen,
      };
    case ACTION_TYPE.SET_SEARCH_PARAM:
      return {
        ...state,
        searchParam: action.payload,
      };
    default:
      return state;
  }
}

// Create a context to share the state and dispatch function
export const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
