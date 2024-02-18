import * as React from 'react';
import styles from './icons.module.scss';

const IconBtn = ({
  id = '',
  height = 24,
  width = 24,
  padding = '12px',
  children,
  style,
  onClick,
}: {
  id?: string;
  height?: number;
  width?: number;
  padding?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}) => (
  <button
    id={id}
    onClick={onClick}
    className={styles.button}
    style={{ padding, ...style }}
  >
    {children}
  </button>
);
export { IconBtn };
