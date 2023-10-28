'use client';
import React from 'react';
import styles from './email-list.module.scss';
import { Favourite } from '../Icons/Icons';
import { emailsData } from '@/app/data';

const EmailList = () => {
  return (
    <div className={styles.emails_container}>
      {emailsData.map((item, index) => (
        <div key={index} className={styles.row}>
          <div className={styles.icon_cell}>
            <Favourite
              width={20}
              height={20}
              strokeColor='rgba(100, 121, 143, 0.5)'
            />
          </div>
          <div className={styles.name_cell}>{item.sender}</div>
          <div className={styles.msg_cell}>
            <div>{item.message}</div>
            <div>{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailList;
