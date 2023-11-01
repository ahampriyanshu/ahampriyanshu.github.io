'use client';
import React from 'react';
import styles from './email-header.module.scss';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  IconBtn,
  Refresh,
  ViewMore,
} from '../Icons/Icons';

const EmailHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.select_container}>
        <IconBtn padding='6px'>
          <Refresh height={20} width={20} />
        </IconBtn>

        <IconBtn padding='6px'>
          <ViewMore height={20} width={20} />
        </IconBtn>
      </div>
      <div className={styles.details_container}>
        <span>1 of 7</span>

        <IconBtn padding='6px'>
          <ChevronLeft height={20} width={20} />
        </IconBtn>

        <IconBtn padding='6px'>
          <ChevronRight height={20} width={20} />{' '}
        </IconBtn>

        <IconBtn padding='6px'>
          <Image alt='list icon' src='/icons/list.png' height={20} width={20} />{' '}
        </IconBtn>
        {/* <Image alt='grid icon' src='/icons/grid.png' height={20} width={20} /> */}
      </div>
    </div>
  );
};

export default EmailHeader;
