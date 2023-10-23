import * as React from 'react';
import styles from './icons.module.scss';

const IconBtn = ({
  height = 24,
  width = 24,
  children,
  onClick,
}: {
  height?: number;
  width?: number;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <button onClick={onClick} className={styles.button}>
    {children}
  </button>
);
export { IconBtn };
