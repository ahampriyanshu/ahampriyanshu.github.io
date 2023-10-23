'use client';
import React, { createContext, useReducer } from 'react';

interface AppState {
  isSideBarOpen: boolean;
  headerTitle: string;
}

export const initialState: AppState = {
  isSideBarOpen: true,
  headerTitle: '',
};

type Action =
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'SET_HEADER_TITLE'; payload: string };

export function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        isSideBarOpen: !state.isSideBarOpen,
      };
    case 'SET_HEADER_TITLE':
      return {
        ...state,
        headerTitle: action.payload,
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

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
