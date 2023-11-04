export type TooltipProps = {
  content: ReactNode;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  children: ReactElement;
};

export type EmailTag = 'inbox' | 'social' | 'promotions';
export type EmailType =
  | 'inbox'
  | 'sent'
  | 'draft'
  | 'sent'
  | 'snoozed'
  | 'starred';

export type Action =
  | { type: 'TOGGLE_SIDEBAR'; payload?: never }
  | { type: 'TOGGLE_SPLIT_VIEW'; payload?: never }
  | { type: 'SET_SEARCH_PARAM'; payload: string }
  | { type: 'SET_FILTER_PARAM'; payload: typeFilter };

export type AppState = {
  isSideBarOpen: boolean;
  isSplitViewActive: boolean;
  searchParam: string;
  filterParam: EmailType;
};

export type EmailAttributes = {
  id?: string;
  selected: boolean;
  fav: boolean;
  sender: string;
  subject: string;
  summary?: string;
  body?: string;
  file?: {
    name: string;
    size: string;
    type: string;
  };
  time: string;
  priority: number;
  read: boolean;
  type: EmailType;
  tag: EmailTag;
};

type IconMap = {
  [key: string]: {
    [key: string]: JSX.Element;
  };
};
