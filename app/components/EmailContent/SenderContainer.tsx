'use client';
import React from 'react';
import styles from './sender-container.module.scss';
import { EmailAttributes } from '@/types';
import Image from 'next/image';
import { IconBtn } from '../Icons/IconBtn';
import { Favourite, Return, ViewMore } from '../Icons/Icons';

export const SenderContainer = ({
  contentData,
}: {
  contentData: EmailAttributes;
}) => {
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
            <span className={styles.title}>{contentData.sender.name}</span>
            <span
              className={styles.email}
            >{`<${contentData.sender.email}>`}</span>
            <span className={styles.unsubscribe}>Unsubscribe</span>
          </div>
          <div className={styles.to_me}>to me</div>
        </div>
        <div className={styles.content}>
          <span className={styles.time} title='2 Nov 2023, 15:56'>
            2 Nov 2023, 15:56 (12 days ago)
          </span>
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
