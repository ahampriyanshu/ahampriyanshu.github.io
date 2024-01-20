'use client';
import { TooltipProps } from '@/types';
import React, { useState } from 'react';

const Tooltip: React.FC<TooltipProps> = ({
  disabled = false,
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

  if (!content) return <>{children}</>;

  return (
    <div
      className={`tooltip-wrapper ${disabled ? 'tooltip-disabled' : ''}}`}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && <div className={`tooltip-body ${direction}`}>{content}</div>}
    </div>
  );
};

export default Tooltip;
