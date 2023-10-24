import { AppState } from '@/types';

export const ACTION_TYPE = {
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
  SET_SEARCH_PARAM: 'SET_SEARCH_PARAM',
};

export const initialState: AppState = {
  isSideBarOpen: true,
  searchParam: '',
};
