import { AppState } from '@/types';

export const ACTION_TYPE = {
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
  TOGGLE_SPLIT_VIEW: 'TOGGLE_SPLIT_VIEW',
  SET_SEARCH_PARAM: 'SET_SEARCH_PARAM',
  SET_SELECTED_MAIL: 'SET_SELECTED_MAIL',
};

export const initialState: AppState = {
  isSideBarOpen: true,
  isSplitViewActive: false,
  searchParam: '',
  selectedMail: 'inbox',
};
