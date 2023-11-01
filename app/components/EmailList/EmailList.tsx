'use client';
import React from 'react';
import styles from './email-list.module.scss';
import { Favourite } from '../Icons/Icons';
import { emailsData } from '@/app/data';
import { formatTime } from '@/app/utils/date';
import EmailItem from './EmailItem';

const EmailList = () => {
  return (
    <div className={styles.emails_container}>
      {emailsData.map((item, index) => (
        <EmailItem key={index} item={item} />
      ))}
    </div>
  );
};

export default EmailList;
