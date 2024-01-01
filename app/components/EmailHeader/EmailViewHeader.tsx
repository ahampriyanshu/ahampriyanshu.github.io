'use client';
import React from 'react';
import styles from './email-header.module.scss';
import {
  Alert,
  Archive,
  Back,
  Bin,
  ChevronLeft,
  ChevronRight,
  IconBtn,
  ViewMore,
} from '../Icons/Icons';
import { useRouter } from 'next/navigation';

export const EmailViewHeader = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.select_container}>
        <div className={styles.back_btn}>
          <IconBtn padding='6px' onClick={() => router.push('/')}>
            <Back height={20} width={20} />
          </IconBtn>
        </div>
        <div className='flex'>
          <IconBtn padding='6px'>
            <Archive height={20} width={20} />
          </IconBtn>
          <IconBtn padding='6px'>
            <Bin height={20} width={20} />
          </IconBtn>
          <IconBtn padding='6px'>
            <Alert height={20} width={20} />
          </IconBtn>
          <IconBtn padding='6px'>
            <ViewMore height={20} width={20} />
          </IconBtn>
        </div>
      </div>
      <div className={styles.details_container}>
        <IconBtn padding='6px'>
          <ChevronLeft height={20} width={20} strokeColor='#b8b8b8' />
        </IconBtn>

        <IconBtn padding='6px'>
          <ChevronRight height={20} width={20} strokeColor='#b8b8b8' />
        </IconBtn>
      </div>
    </div>
  );
};
