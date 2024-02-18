'use client';
import { PopoverProps } from '@/types';
import React, { useEffect, useRef, useState } from 'react';
import styles from './popover.module.scss';
const Popover = ({ trigger, content }: PopoverProps) => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const popoverRef = useRef(null);

  const handlePopoverToggle = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !(popoverRef.current as any).contains(event.target)
    ) {
      setIsPopoverVisible(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsPopoverVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles['popover-container']} ref={popoverRef}>
      <div className={styles['popover-trigger']} onClick={handlePopoverToggle}>
        {trigger}
      </div>
      {isPopoverVisible && (
        <div className={styles['popover-content']}>{content}</div>
      )}
    </div>
  );
};

export default Popover;
