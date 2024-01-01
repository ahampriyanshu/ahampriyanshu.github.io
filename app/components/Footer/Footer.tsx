'use client';
import { memo, useEffect, useState } from 'react';
import styles from './footer.module.scss';
import { useRouter } from 'next/navigation';
import { OpenInNewTab } from '../Icons/Icons';
import { getRelativeTime } from '@/app/utils/date';
import { getRecentDate } from '@/app/utils/localStorage';

function Footer() {
  const router = useRouter();
  const maxValue = 15;
  const currentValue = 3.7;
  const usedPercentage = (currentValue / maxValue) * 100;

  const [date, setDate] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDate = getRecentDate();
      if (storedDate) {
        setDate(storedDate);
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.derive}>
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{
                width: `${usedPercentage}%`,
              }}
            ></div>
          </div>
          <div
            onClick={() => router.push('https://resume.ahampriyanshu.com')}
            className={`flex justify-start align-center pt-1  ${styles.text}`}
          >
            <span className='underline mr-2 cursor'>{`${currentValue} GB of ${maxValue} GB used`}</span>{' '}
            <OpenInNewTab width={16} height={16} />
          </div>
        </div>

        <div className={styles.text}>
          <span className='underline'>Terms</span> ·{' '}
          <span className='underline'>Privacy</span> ·{' '}
          <span className='underline'>Programme Policies</span>
        </div>

        <div className={styles.text}>
          Last account activity:
          {date ? ` ${getRelativeTime(date)}` : ' '}
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
