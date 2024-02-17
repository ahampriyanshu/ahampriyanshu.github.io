'use client';
import { PopoverProps, TooltipProps } from '@/types';
import React, { useState } from 'react';
import styles from './popover.module.scss';

const Popover: React.FC<PopoverProps> = ({
  isOpen = false,
  children,
}: PopoverProps) => {
  const [active, setActive] = useState((isOpen = false));

  return (
    <div
      // style={{ display: active ? 'block' : 'none' }}
      className={styles.popover}
    >
      {children}
    </div>
  );
};

export default Popover;
