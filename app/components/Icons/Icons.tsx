import * as React from 'react';
import { IconBtn } from './IconBtn';
import { ICON_COLOR, ICON_COLOR_DARK } from '@/app/constants/colors.constants';

const HamburgerMenu = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg viewBox='0 0 24 24' width={width} height={height}>
    <path
      d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'
      fill={strokeColor}
    />
  </svg>
);

const QuestionMark = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
  >
    <path fill='none' d='M0 0h24v24H0z' />
    <path
      d='M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z'
      fill={strokeColor}
    />
  </svg>
);

const Settings = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
  >
    <path
      fill={strokeColor}
      d='M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z'
    />
    <circle cx={12} cy={12} r={3.5} fill={strokeColor} />
  </svg>
);

const GridMenu = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
  >
    <path
      fill={strokeColor}
      d='M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-4 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'
    />
  </svg>
);

const Search = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
  >
    <path
      d='m20.49 19-5.73-5.73C15.53 12.2 16 10.91 16 9.5A6.5 6.5 0 1 0 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z'
      fill={ICON_COLOR_DARK}
    />
    <path fill='none' d='M0 0h24v24H0V0z' />
  </svg>
);

const Filters = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR_DARK,
}) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
  >
    <path
      d='M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z'
      fill={strokeColor}
    />
  </svg>
);

const Favourite = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
  >
    <path
      d='m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z'
      fill={strokeColor}
    />
  </svg>
);

const ListMenu = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
  >
    <path
      d='M3 2h18v2H3zm0 18h18v2H3zm0-6h18v2H3zm0-6h18v2H3z'
      fill={strokeColor}
    />
  </svg>
);

const ChevronLeft = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg viewBox='0 0 24 24' width={height} height={width}>
    <path
      d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'
      fill={strokeColor}
    />
  </svg>
);

const ChevronRight = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg viewBox='0 0 24 24' width={height} height={width}>
    <path
      d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
      fill={strokeColor}
    />
  </svg>
);

const Refresh = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg viewBox='0 0 24 24' width={height} height={width}>
    <path
      d='M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'
      fill={strokeColor}
    />
  </svg>
);

const ViewMore = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg viewBox='0 0 24 24' width={height} height={width}>
    <path
      d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
      fill={strokeColor}
    />
  </svg>
);

const ArrowDropDown = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg viewBox='0 0 24 24' width={height} height={width}>
    <path d='m7 10 5 5 5-5z' fill={strokeColor} />
  </svg>
);

const Inbox = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg viewBox='0 0 24 24' width={height} height={width}>
    <path
      d='M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z'
      fill={strokeColor}
    />
  </svg>
);

const Time = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg viewBox='0 0 24 24' width={height} height={width}>
    <path
      d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
      fill={strokeColor}
    />
    <path d='M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z' fill={strokeColor} />
  </svg>
);

export {
  HamburgerMenu,
  QuestionMark,
  Settings,
  GridMenu,
  Search,
  Filters,
  IconBtn,
  Favourite,
  ListMenu,
  ChevronLeft,
  ChevronRight,
  Refresh,
  ViewMore,
  ArrowDropDown,
  Inbox,
  Time,
};
