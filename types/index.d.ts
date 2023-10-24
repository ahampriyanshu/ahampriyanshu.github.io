export type TooltipProps = {
  content: ReactNode;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  children: ReactElement;
};

export type Action =
  | { type: 'TOGGLE_SIDEBAR'; payload?: never }
  | { type: 'SET_SEARCH_PARAM'; payload: string };

export type AppState = {
  isSideBarOpen: boolean;
  searchParam: string;
};
