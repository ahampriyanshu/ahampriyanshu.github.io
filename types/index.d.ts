export type TooltipProps = {
  disabled?: boolean;
  content: ReactNode;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  children: ReactElement;
};

export type ToastProps = {
  message: string;
  duration?: number;
};

export type EmailTag = 'inbox' | 'social' | 'promotions';
export type EmailType =
  | 'inbox'
  | 'sent'
  | 'draft'
  | 'sent'
  | 'snoozed'
  | 'starred'
  | 'spam'
  | 'bin';

export type Action =
  | { type: 'TOGGLE_SIDEBAR'; payload?: never }
  | { type: 'TOGGLE_SPLIT_VIEW'; payload?: never }
  | { type: 'SET_SEARCH_PARAM'; payload: string }
  | { type: 'SET_FILTER_PARAM'; payload: typeFilter }
  | { type: 'PUSH_EMAIL'; payload: EmailAttributes }
  | { type: 'SET_IS_LOADED'; payload: boolean }
  | { type: 'RESET_EMAILS'; payload?: never }
  | {
      type: 'UPDATE_EMAIL';
      payload: { emailId: string; data: Partial<EmailAttributes> };
    };

export type AppState = {
  isSideBarOpen: boolean;
  isSplitViewActive: boolean;
  searchParam: string;
  filterParam: EmailType;
  emails: EmailAttributes[];
  isLoaded: boolean;
};

export type EmailAttributes = {
  id: string;
  selected: boolean;
  sender: {
    name: string;
    logo?: string;
    email: string;
  };
  subject: string;
  summary?: string;
  body?: string;
  file?: {
    name: string;
    size: string;
    type: string;
  };
  priority: number;
  type: EmailType;
  tag?: EmailTag;
  isOpened?: boolean;
  isFav?: boolean;
  isActive?: boolean;
};

type IconMap = {
  [key: string]: {
    [key: string]: JSX.Element;
  };
};
