'use client';
import { memo } from 'react';
import styles from './footer.module.scss';
import { useRouter } from 'next/navigation';
import { OpenInNewTab } from '../Icons/Icons';

function Footer() {
  const router = useRouter();

  const currentValue = 60;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.derive}>
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{
                width: `${currentValue}%`,
              }}
            ></div>
          </div>
          <div
            onClick={() => router.push('https://resume.ahampriyanshu.com')}
            className={`flex justify-start align-center pt-1  ${styles.text}`}
          >
            <span className='underline mr-2 cursor'>4.76 GB of 15 GB used</span>{' '}
            <OpenInNewTab width={16} height={16} />
          </div>
        </div>

        <div className={styles.text}>
          <span className='underline'>Terms</span> ·{' '}
          <span className='underline'>Privacy</span> ·{' '}
          <span className='underline'>Programme Policies</span>
        </div>

        <div className={styles.text}>Last account activity: 24 minutes ago</div>
      </div>
    </div>
  );
}

export default memo(Footer);