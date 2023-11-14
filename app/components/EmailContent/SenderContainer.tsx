'use client';
import React from 'react';
import styles from './sender-container.module.scss';
import { EmailAttributes } from '@/types';
import Image from 'next/image';
import { IconBtn } from '../Icons/IconBtn';
import { ViewMore } from '../Icons/Icons';

export const SenderContainer = ({
  contentData,
}: {
  contentData: EmailAttributes;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.sender_logo}>
        <Image
          alt='list icon'
          src={`/icons/${contentData.sender.logo}`}
          height={32}
          width={32}
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
          <IconBtn padding='6px'>
            <ViewMore height={20} width={20} />
          </IconBtn>
        </div>
      </div>
    </div>
  );
};
