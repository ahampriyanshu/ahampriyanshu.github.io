import * as React from 'react';
import { IconBtn } from './IconBtn';
import { ICON_COLOR, ICON_COLOR_DARK } from '@/app/constants/ui.constants';

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
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 -960 960 960'
    width={height}
    height={width}
  >
    <path
      d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22ZM200-200h560-560Z'
      fill={strokeColor}
    />
  </svg>
);

const InboxFilled = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
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

const Sell = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg viewBox='0 -960 960 960' width={height} height={width}>
    <path
      d='M570-104q-23 23-57 23t-57-23L104-456q-11-11-17.5-26T80-514v-286q0-33 23.5-56.5T160-880h286q17 0 32 6.5t26 17.5l352 353q23 23 23 56.5T856-390L570-104Zm-57-56 286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640ZM160-800Z'
      fill={strokeColor}
    />
  </svg>
);

const SellFilled = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg viewBox='0 0 24 24' width={height} height={width}>
    <path
      d='m21.41 11.41-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z'
      fill={strokeColor}
    />
  </svg>
);

const Social = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg viewBox='0 -960 960 960' width={height} height={width}>
    <path
      d='M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z'
      fill={strokeColor}
    />
  </svg>
);

const SocialFilled = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg viewBox='0 0 24 24' width={height} height={width}>
    <path
      d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'
      fill={strokeColor}
    />
  </svg>
);

const ExpandMore = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg viewBox='0 -960 960 960' width={height} height={width}>
    <path
      d='M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z'
      fill={strokeColor}
    />
  </svg>
);

const ExpandLess = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg viewBox='0 -960 960 960' width={height} height={width}>
    <path
      d='m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z'
      fill={strokeColor}
    />
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
  InboxFilled,
  Time,
  Social,
  SocialFilled,
  Sell,
  SellFilled,
  ExpandMore,
  ExpandLess,
};
