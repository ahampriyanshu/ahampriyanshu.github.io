'use client';
import React, {
  createContext,
  useReducer,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { ACTION_TYPE, initialState } from './constants/ui.constants';
import { Action, AppState } from '@/types';
import {
  createEmailInLocalStorage,
  getEmailsFromLocalStorage,
  setInitialDate,
  setRecentDate,
} from './utils/localStorage';
import { emailList } from './data';
import { Loader } from './components/Loader/Loader';
import { useEmailActions } from './hooks/useEmailActions';

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
        emails: action?.payload || getEmailsFromLocalStorage(),
      };
    case ACTION_TYPE.UPDATE_EMAIL: {
      return {
        ...state,
        emails: state.emails.map((email) => {
          if (email.id === action.payload.emailId) {
            return {
              ...email,
              ...action.payload.data,
            };
          }
          return email;
        }),
      };
    }
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
  const [isLoading, setIsLoading] = useState(true);
  const { createDraftMail } = useEmailActions();

  useEffect(() => {
    console.log(`
    ███████╗███╗   ███╗ █████╗ ██╗██╗     
    ╚══███╔╝████╗ ████║██╔══██╗██║██║     
      ███╔╝ ██╔████╔██║███████║██║██║     
     ███╔╝  ██║╚██╔╝██║██╔══██║██║██║     
    ███████╗██║ ╚═╝ ██║██║  ██║██║███████╗
    ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚══════╝
    `);
    const storedEmails = getEmailsFromLocalStorage();
    dispatch({ type: 'SET_IS_LOADED', payload: true });
    createDraftMail();
    const newEmails = emailList.filter(
      (email) =>
        !storedEmails.some((storedEmail) => storedEmail.id === email.id)
    );
    if (newEmails.length > 0) {
      setInitialDate();
      setRecentDate();

      newEmails.forEach((email, index) => {
        setTimeout(
          () => {
            const data = {
              ...email,
              date: new Date().toISOString(),
              isFav: false,
              isActive: true,
              isOpened: false,
            };
            createEmailInLocalStorage(data);
            dispatch({ type: 'PUSH_EMAIL', payload: data });
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
      {isLoading ? <Loader setIsLoading={setIsLoading} /> : children}
    </AppContext.Provider>
  );
}

export default AppProvider;
