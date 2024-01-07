'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './email-list.module.scss';
import { Bin, Favourite, UnFavourite } from '../Icons/Icons';
import { getAbsoluteDate } from '@/app/utils/date';
import { useRouter } from 'next/navigation';
import { EmailAttributes } from '@/types';
import { getInitialDate } from '@/app/utils/localStorage';
import { useEmailActions } from '@/app/hooks/useEmailActions';

export const EmailItem = ({ email }: { email: EmailAttributes }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const { updateEmailArgs } = useEmailActions();

  const toggleCheckbox = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setIsChecked(!isChecked);
  };

  const toggleFavourite = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    updateEmailArgs(email.id, { isFav: !email.isFav });
  };

  return (
    <div
      role='checkbox'
      aria-checked={isChecked}
      draggable={false}
      className={styles.email_content}
      style={{
        backgroundColor: email.isOpened ? '#f2f6fc' : '',
      }}
      onClick={() => router.push(email.id || '/linkedin', { scroll: false })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
    >
      <div className={styles.icon_cell}>
        <div onClick={toggleCheckbox}>
          <Image
            src={`/icons/${isChecked ? 'checkbox-active' : 'checkbox'}.png`}
            alt={`${isChecked ? 'checkbox-active' : 'checkbox'} icon`}
            width={20}
            height={20}
          />
        </div>

        <div onClick={toggleFavourite}>
          {email.isFav ? (
            <UnFavourite
              key={email.id}
              width={20}
              height={20}
              strokeColor='rgb(247,202,105)'
            />
          ) : (
            <Favourite
              key={email.id}
              width={20}
              height={20}
              strokeColor='rgba(100, 121, 143, 0.5)'
            />
          )}
        </div>
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

        <div>
          {isHovered ? (
            <div className='flex'>
              <Bin height={20} width={20} />
            </div>
          ) : (
            <span className={styles.date}>
              {getAbsoluteDate(getInitialDate())}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
