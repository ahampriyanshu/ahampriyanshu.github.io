import * as React from 'react';
import { IconBtn } from './IconBtn';
const FG_COLOR = '#5f6368';

const HamburgerMenu = ({ height = 24, width = 24 }) => (
  <svg viewBox='0 0 24 24' width={width} height={height}>
    <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' fill={FG_COLOR} />
  </svg>
);
export { HamburgerMenu, IconBtn };
