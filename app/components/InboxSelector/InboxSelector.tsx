'use client';
import React, { useContext } from 'react';
import styles from './inbox-selector.module.scss';
import Image from 'next/image';
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  IconBtn,
  Refresh,
  ViewMore,
} from '../Icons/Icons';
import { AppContext } from '@/app/AppContext';
import { ACTION_TYPE } from '@/app/constants/ui.constants';

export const InboxSelector = () => {
  const { state, dispatch } = useContext(AppContext);
  const toggleSplitView = () => {
    dispatch({ type: 'TOGGLE_SPLIT_VIEW' });
  };
  const isSplitViewActive = state?.isSplitViewActive || false;

  return (
    <div className={styles.container}>
      <div>Primary</div>
    </div>
  );
};
