'use client';
import React from 'react';
import styles from './email-header.module.scss';
import Image from 'next/image';

const EmailHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.select_container}>Select</div>
      <div className={styles.details_container}>
        <span>1 of 7</span>
        <Image alt='list icon' src='/icons/list.png' height={20} width={20} />
        <Image alt='grid icon' src='/icons/grid.png' height={20} width={20} />
      </div>
    </div>
  );
};

export default EmailHeader;
