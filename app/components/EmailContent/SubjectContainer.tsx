'use client';
import { EmailAttributes } from '@/types';
import { IconBtn } from '../Icons/IconBtn';
import { OpenInNewTab, Print } from '../Icons/Icons';
import styles from './email-content.module.scss';
import { openInNewTab } from '@/app/utils/common';

export const SubjectContainer = ({
  contentData,
}: {
  contentData: EmailAttributes;
}) => {
  return (
    <div className={styles.subject}>
      <div className={styles.text_content}>
        <div className={styles.title}>{contentData?.subject}</div>
        <div className={styles.tag}>{contentData?.tag}</div>
      </div>
      <div className={styles.icon_content}>
        <IconBtn padding='8px'>
          <Print height={20} width={20} />
        </IconBtn>
        <IconBtn
          onClick={() =>
            openInNewTab(
              'https://www.youtube.com/watch?v=wQTbkEeCTeM&pp=ygUPbG91aWUgZnVubnkgY3V0'
            )
          }
          padding='8px'
        >
          <OpenInNewTab height={20} width={20} />
        </IconBtn>
      </div>
    </div>
  );
};
