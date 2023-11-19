import * as React from 'react';
import { IconBtn } from './IconBtn';
import { ICON_COLOR, ICON_COLOR_DARK } from '@/app/constants/ui.constants';

export { IconBtn, ICON_COLOR, ICON_COLOR_DARK };

export const Fallback = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 -960 960 960'
    width={height}
    height={width}
  >
    <path
      d='M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 412L346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z'
      fill={strokeColor}
    />
  </svg>
);

export const HamburgerMenu = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={width}
    height={height}
  >
    <path
      d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'
      fill={strokeColor}
    />
  </svg>
);

export const QuestionMark = ({
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

export const Settings = ({
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
    <path
      fill={strokeColor}
      d='M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z'
    />
    <circle cx={12} cy={12} r={3.5} fill={strokeColor} />
  </svg>
);

export const GridMenu = ({
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
    <path
      fill={strokeColor}
      d='M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-4 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'
    />
  </svg>
);

export const Search = ({
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
    <path
      d='m20.49 19-5.73-5.73C15.53 12.2 16 10.91 16 9.5A6.5 6.5 0 1 0 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z'
      fill={ICON_COLOR_DARK}
    />
    <path fill='none' d='M0 0h24v24H0V0z' />
  </svg>
);

export const Filters = ({
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

export const Favourite = ({
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
    <path
      d='m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z'
      fill={strokeColor}
    />
  </svg>
);

export const ListMenu = ({
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
    <path
      d='M3 2h18v2H3zm0 18h18v2H3zm0-6h18v2H3zm0-6h18v2H3z'
      fill={strokeColor}
    />
  </svg>
);

export const ChevronLeft = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={height}
    height={width}
  >
    <path
      d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'
      fill={strokeColor}
    />
  </svg>
);

export const ChevronRight = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={height}
    height={width}
  >
    <path
      d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
      fill={strokeColor}
    />
  </svg>
);

export const Refresh = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={height}
    height={width}
  >
    <path
      d='M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'
      fill={strokeColor}
    />
  </svg>
);

export const ViewMore = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={height}
    height={width}
  >
    <path
      d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
      fill={strokeColor}
    />
  </svg>
);

export const ArrowDropDown = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={height}
    height={width}
  >
    <path d='m7 10 5 5 5-5z' fill={strokeColor} />
  </svg>
);

export const Inbox = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
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

export const InboxFilled = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={height}
    height={width}
  >
    <path
      d='M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z'
      fill={strokeColor}
    />
  </svg>
);

export const Time = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={height}
    height={width}
  >
    <path
      d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
      fill={strokeColor}
    />
    <path d='M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z' fill={strokeColor} />
  </svg>
);

export const Sell = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 -960 960 960'
    width={height}
    height={width}
  >
    <path
      d='M570-104q-23 23-57 23t-57-23L104-456q-11-11-17.5-26T80-514v-286q0-33 23.5-56.5T160-880h286q17 0 32 6.5t26 17.5l352 353q23 23 23 56.5T856-390L570-104Zm-57-56 286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640ZM160-800Z'
      fill={strokeColor}
    />
  </svg>
);

export const SellFilled = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={height}
    height={width}
  >
    <path
      d='m21.41 11.41-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z'
      fill={strokeColor}
    />
  </svg>
);

export const Social = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 -960 960 960'
    width={height}
    height={width}
  >
    <path
      d='M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z'
      fill={strokeColor}
    />
  </svg>
);

export const SocialFilled = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={height}
    height={width}
  >
    <path
      d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'
      fill={strokeColor}
    />
  </svg>
);

export const ExpandMore = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 -960 960 960'
    width={height}
    height={width}
  >
    <path
      d='M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z'
      fill={strokeColor}
    />
  </svg>
);

export const ExpandLess = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 -960 960 960'
    width={height}
    height={width}
  >
    <path
      d='m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z'
      fill={strokeColor}
    />
  </svg>
);

export const TrashFilled = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={height}
    height={width}
  >
    <path
      d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'
      fill={strokeColor}
    />
  </svg>
);

export const Trash = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={height}
    height={width}
  >
    <path
      d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z'
      fill={strokeColor}
    />
  </svg>
);

export const Alert = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={height}
    height={width}
  >
    <path
      d='M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9 14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z'
      fill={strokeColor}
    />
    <path d='M11 7h2v6h-2zm0 8h2v2h-2z' fill={strokeColor} />
  </svg>
);

export const AlertFilled = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={height}
    height={width}
  >
    <path
      d='M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z'
      fill={strokeColor}
    />
  </svg>
);

export const Archive = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 -960 960 960'
    width={height}
    height={width}
  >
    <path
      d='m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z'
      fill={strokeColor}
    />
  </svg>
);

export const Bin = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 -960 960 960'
    width={height}
    height={width}
  >
    <path
      d='M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z'
      fill={strokeColor}
    />
  </svg>
);

export const Back = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={height}
    height={width}
  >
    <path
      d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'
      fill={strokeColor}
    />
  </svg>
);

export const OpenInNewTab = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 -960 960 960'
    width={height}
    height={width}
  >
    <path
      d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z'
      fill={strokeColor}
    />
  </svg>
);

export const Print = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 -960 960 960'
    width={height}
    height={width}
  >
    <path
      d='M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z'
      fill={strokeColor}
    />
  </svg>
);

export const Return = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
    viewBox='0 -960 960 960'
  >
    <path
      d='M360-240 120-480l240-240 56 56-144 144h488v-160h80v240H272l144 144-56 56Z'
      fill={strokeColor}
    />
  </svg>
);

export const Reply = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
    viewBox='0 0 24 24'
  >
    <path
      d='m5.828 7 2.536 2.535L6.95 10.95 2 6l4.95-4.95 1.414 1.415L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 0 0 0-12H5.828Z'
      fill={strokeColor}
    />
  </svg>
);

export const Forward = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
    viewBox='0 0 24 24'
  >
    <path
      d='M18.172 7H11a6 6 0 0 0 0 12h9v2h-9a8 8 0 0 1 0-16h7.172l-2.536-2.536L17.05 1.05 22 6l-4.95 4.95-1.414-1.415L18.172 7Z'
      fill={strokeColor}
    />
  </svg>
);

export const Person = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
    viewBox='0 -960 960 960'
  >
    <path
      d='M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z'
      fill={strokeColor}
    />
  </svg>
);

export const History = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
    viewBox='0 -960 960 960'
  >
    <path
      d='M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z'
      fill={strokeColor}
    />
  </svg>
);

export const Draft = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
    viewBox='0 -960 960 960'
  >
    <path
      d='M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z'
      fill={strokeColor}
    />
  </svg>
);

export const DraftFilled = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
    viewBox='0 0 24 24'
  >
    <path
      d='M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z'
      fill={strokeColor}
    />
  </svg>
);

export const Send = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
    viewBox='0 -960 960 960'
  >
    <path
      d='M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z'
      fill={strokeColor}
    />
  </svg>
);

export const SendFilled = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
    viewBox='0 0 24 24'
  >
    <path d='M2.01 21 23 12 2.01 3 2 10l15 2-15 2z' fill={strokeColor} />
  </svg>
);

export const Clock = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
    viewBox='0 0 24 24'
  >
    <path
      d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
      fill={strokeColor}
    />
    <path d='M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z' fill={strokeColor} />
  </svg>
);

export const ClockFilled = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
    viewBox='0 0 24 24'
  >
    <path
      d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z'
      fill={strokeColor}
    />
  </svg>
);

export const StarFilled = ({
  height = 24,
  width = 24,
  strokeColor = ICON_COLOR,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
    viewBox='0 0 24 24'
  >
    <path
      d='M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'
      fill={strokeColor}
    />
  </svg>
);

export const Star = ({ height = 24, width = 24, strokeColor = ICON_COLOR }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={height}
    height={width}
    viewBox='0 0 24 24'
  >
    <path
      d='m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z'
      fill={strokeColor}
    />
  </svg>
);
