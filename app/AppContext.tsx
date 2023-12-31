'use client';
import React, { createContext, useReducer, ReactNode, useEffect } from 'react';
import { ACTION_TYPE, initialState } from './constants/ui.constants';
import { Action, AppState } from '@/types';
import {
  createEmailInLocalStorage,
  getEmailsFromLocalStorage,
} from './utils/localStorage';
import { emailList } from './data';

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
    case 'PUSH_EMAIL':
      return {
        ...state,
        emails: [...state.emails, action.payload],
      };
    case 'RESET_EMAILS':
      return {
        ...state,
        emails: emailList,
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
  useEffect(() => {
    if (!getEmailsFromLocalStorage().length) {
      emailList.forEach((email, index) => {
        setTimeout(
          () => {
            createEmailInLocalStorage(email);
            dispatch({ type: 'PUSH_EMAIL', payload: email });
          },
          (index + 1) * 3000
        );
      });
    } else {
      dispatch({ type: 'RESET_EMAILS' });
    }
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
