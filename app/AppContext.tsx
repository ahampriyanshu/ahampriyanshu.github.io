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
    case ACTION_TYPE.TOGGLE_SPLIT_VIEW:
      return {
        ...state,
        isSplitViewActive: !state.isSplitViewActive,
      };
    case 'SET_SEARCH_PARAM':
      return {
        ...state,
        searchParam: action.payload || '',
      };
    case 'SET_FILTER_PARAM':
      return {
        ...state,
        filterParam: action.payload || 'inbox',
      };
    default:
      return state;
  }
}

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
