import React, { useState } from 'react';
import styles from './email-list.module.scss';
import { Favourite } from '../Icons/Icons';
import { formatTime } from '@/app/utils/date';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { EmailAttributes } from '@/types';

export const EmailItem = ({ email }: { email: EmailAttributes }) => {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div
      onClick={() => router.push(email.id || '/linkedin', { scroll: false })}
      className={styles.email_content}
    >
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
      <div className={styles.name_cell}>{email.sender.name}</div>
      <div className={styles.msg_cell}>
        <div className={styles.msg_content}>
          <div>
            {email.subject} <span> - {email.summary}</span>
          </div>
          {email.file ? (
            <div className={styles.file}>
              <Image
                src={`/icons/${email.file.type}.png`}
                alt={`${email.file.type} icon`}
                width={16}
                height={16}
              />
              {email.file.name}
            </div>
          ) : null}
        </div>

        <div>{formatTime(email.time)}</div>
      </div>
    </div>
  );
};
