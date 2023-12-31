'use client';
import { ToastProps } from '@/types';
import React, { useState, useEffect } from 'react';

const Toast = ({ message = '', duration }: ToastProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
    return;
  }, [message, duration]);

  return visible ? <div className='toast'>{message}</div> : null;
};

export default Toast;
