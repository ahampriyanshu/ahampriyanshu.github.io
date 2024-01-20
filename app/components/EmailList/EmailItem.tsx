'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './email-list.module.scss';
import {
  Archive,
  Bin,
  Favourite,
  ReadMail,
  Time,
  UnFavourite,
  UnReadMail,
} from '../Icons/Icons';
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

  const toggleOpened = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    updateEmailArgs(email.id, { isOpened: !email.isOpened });
  };

  const deleteMail = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    updateEmailArgs(email.id, { isActive: false });
  };

  return (
    <div
      role='checkbox'
      aria-checked={isChecked}
      draggable={false}
      className={`${styles.email_content} ${
        email.isOpened ? styles.is_opened : ''
      }`}
      onClick={() => router.push(email.id || '/linkedin', { scroll: false })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
    >
      <div className={styles.icon_cell}>
        <div className='icon-btn' onClick={toggleCheckbox}>
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
      <div
        className={`${styles.name_cell} ${email.isOpened ? '' : 'font-bold'}`}
      >
        {email.sender.name}
        {email.type === 'draft' ? <span> Draft</span> : null}
      </div>
      <div className={styles.msg_cell}>
        <div className={styles.msg_content}>
          <div className={email.isOpened ? '' : 'font-bold'}>
            {email.subject}
            <span
              style={{
                letterSpacing: '0.1px',
              }}
              className={styles.summary}
            >
              - {email.summary}
            </span>
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

        <div className={styles.options_container}>
          {isHovered ? (
            <div className={`${styles.options}`}>
              <Archive height={18} width={18} strokeColor='rgba(0,0,0, 0.7)' />
              <Bin height={18} width={18} strokeColor='rgba(0,0,0, 0.7)' />

              <div onClick={toggleOpened}>
                {email.isOpened ? (
                  <UnReadMail
                    height={18}
                    width={18}
                    strokeColor='rgba(0,0,0, 0.7)'
                  />
                ) : (
                  <ReadMail
                    height={18}
                    width={18}
                    strokeColor='rgba(0,0,0, 0.7)'
                  />
                )}
              </div>

              <Time height={18} width={18} strokeColor='rgba(0,0,0, 0.7)' />
            </div>
          ) : (
            <span
              className={`${styles.date} ${email.isOpened ? '' : 'font-bold'}`}
            >
              {getAbsoluteDate(getInitialDate())}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
