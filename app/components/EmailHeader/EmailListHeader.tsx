'use client';
import React, { useContext } from 'react';
import styles from './email-header.module.scss';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  IconBtn,
  Refresh,
  ViewMore,
} from '../Icons/Icons';
import { AppContext } from '@/app/AppContext';
import { openInNewTab } from '@/app/utils/common';
import { EASTER_EGGS } from '@/app/data/links.data';

export const EmailListHeader = () => {
  const { state, dispatch } = useContext(AppContext);
  const toggleSplitView = () => {
    dispatch({ type: 'TOGGLE_SPLIT_VIEW' });
  };

  const refreshEmails = () => {
    dispatch({ type: 'RESET_EMAILS' });
  };
  const isSplitViewActive = state?.isSplitViewActive || false;
  console.log('rendering page');
  return (
    <div className={styles.container}>
      <div className={styles.select_container}>
        <IconBtn onClick={refreshEmails} padding='6px'>
          <Refresh height={20} width={20} />
        </IconBtn>
        <IconBtn padding='6px'>
          <ViewMore height={20} width={20} />
        </IconBtn>
      </div>
      <div className={styles.details_container}>
        <div className={styles.pagination}>1-10 of 10</div>

        <IconBtn
          onClick={() => openInNewTab(EASTER_EGGS.HEADER.PREVIOUS)}
          padding='6px'
        >
          <ChevronLeft height={20} width={20} />
        </IconBtn>

        <IconBtn
          onClick={() => openInNewTab(EASTER_EGGS.HEADER.NEXT)}
          padding='6px'
        >
          <ChevronRight height={20} width={20} />{' '}
        </IconBtn>

        <div className='flex'>
          <IconBtn
            onClick={toggleSplitView}
            style={{
              width: 'auto',
              borderRadius: '4px',
              padding: '6px 1px',
            }}
          >
            {isSplitViewActive ? (
              <Image
                alt='list icon'
                src='/icons/list.png'
                height={20}
                width={20}
              />
            ) : (
              <Image
                alt='grid icon'
                src='/icons/grid.png'
                height={20}
                width={20}
              />
            )}
          </IconBtn>
        </div>
      </div>
    </div>
  );
};
