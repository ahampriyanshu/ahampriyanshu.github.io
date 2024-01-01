'use client';
import React, { useEffect } from 'react';
import styles from './sender-container.module.scss';
import { EmailAttributes } from '@/types';
import Image from 'next/image';
import { IconBtn } from '../Icons/IconBtn';
import { ArrowDropDown, Favourite, Return, ViewMore } from '../Icons/Icons';
import { getAbsoluteTimeStamp, getRelativeTimeStamp } from '@/app/utils/date';
import { getDate } from '@/app/utils/localStorage';

export const SenderContainer = ({
  contentData,
}: {
  contentData: EmailAttributes;
}) => {
  const [date, setDate] = React.useState<string>('');

  useEffect(() => {
    setDate(getDate());
  }, [contentData.id]);

  const senderImg = contentData?.sender?.logo || '';

  return (
    <div className={styles.container}>
      <div
        className={`${styles.sender_logo} ${senderImg ? '' : styles.fallback}`}
      >
        <Image
          alt='list icon'
          src={`/icons/${senderImg || 'avatar.png'}`}
          height={senderImg ? 32 : 40}
          width={senderImg ? 32 : 40}
        />
      </div>

      <div className={styles.options}>
        <div className={styles.sender_info}>
          <div className={styles.text_content}>
            <span className={styles.title}>{contentData?.sender?.name}</span>
            <span
              className={styles.email}
            >{`<${contentData?.sender?.email}>`}</span>
            <span className={styles.unsubscribe}>Unsubscribe</span>
          </div>
          <div className={styles.to_me}>
            to me <ArrowDropDown height={20} width={20} />
          </div>
        </div>
        <div className={styles.content}>
          {date ? (
            <span className={styles.time}>{getRelativeTimeStamp(date)}</span>
          ) : null}
          <IconBtn padding='8px'>
            <Favourite height={20} width={20} />
          </IconBtn>
          <IconBtn padding='8px'>
            <Return height={20} width={20} />
          </IconBtn>
          <IconBtn padding='8px'>
            <ViewMore height={20} width={20} />
          </IconBtn>
        </div>
      </div>
    </div>
  );
};
