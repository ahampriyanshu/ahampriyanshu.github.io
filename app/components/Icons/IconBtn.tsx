import * as React from 'react';
import styles from './icons.module.scss';

const IconBtn = ({
  height = 24,
  width = 24,
  padding = '12px',
  children,
  style,
  onClick,
}: {
  height?: number;
  width?: number;
  padding?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}) => (
  <button
    onClick={onClick}
    className={styles.button}
    style={{ padding, ...style }}
  >
    {children}
  </button>
);
export { IconBtn };
