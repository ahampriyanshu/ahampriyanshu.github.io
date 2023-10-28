'use client';
import { TooltipProps } from '@/types';
import React, { useState } from 'react';

const Tooltip: React.FC<TooltipProps> = ({
  content,
  direction = 'bottom',
  delay = 400,
  children,
}: TooltipProps) => {
  let timeout: NodeJS.Timeout | undefined;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    setActive(false);
  };

  return (
    <div
      className='tooltip-wrapper'
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && <div className={`tooltip-body ${direction}`}>{content}</div>}
    </div>
  );
};

export default Tooltip;
