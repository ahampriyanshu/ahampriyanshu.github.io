import * as React from 'react';
import styles from 'icons.module.scss';
const FG_COLOR = '#5f6368';

const IconBtn = ({
  height = 24,
  width = 24,
  children,
}: {
  height?: number;
  width?: number;
  children: React.ReactNode;
}) => <button className='btn-icon'>{children}</button>;
export { IconBtn };
