import React, { useState } from 'react';
import styles from './email-list.module.scss';
import { Favourite } from '../Icons/Icons';
import { formatTime } from '@/app/utils/date';

const EmailItem = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.email_content}>
      <div className={styles.icon_cell}>
        <label className={styles.checkboxLabel}>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={toggleCheckbox}
            className={styles.checkboxInput}
          />
          <span className={styles.checkboxCustom}></span>
        </label>
        <Favourite
          width={20}
          height={20}
          strokeColor='rgba(100, 121, 143, 0.5)'
        />
      </div>
      <div className={styles.name_cell}>{item.sender}</div>
      <div className={styles.msg_cell}>
        <div>
          {item.subject} <span> - {item.summary}</span>
        </div>
        <div>{formatTime(item.time)}</div>
      </div>
    </div>
  );
};

export default EmailItem;
