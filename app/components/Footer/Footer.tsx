'use client';
import { memo, useEffect, useState } from 'react';
import styles from './footer.module.scss';
import { OpenInNewTab } from '../Icons/Icons';
import { getRelativeTime } from '@/app/utils/date';
import { getInitialDate } from '@/app/utils/localStorage';
import { openInNewTab } from '@/app/utils/common';

function Footer() {
  const maxValue = 15;
  const currentValue = 3.7;
  const usedPercentage = (currentValue / maxValue) * 100;

  const [date, setDate] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDate = getInitialDate();
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
            onClick={() => openInNewTab('https://drive.google.com/drive/u/0/')}
            className={`flex justify-start align-center pt-1 ${styles.text}`}
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
          {date
            ? `Last account activity: ${getRelativeTime(date)}`
            : 'Last account activity: '}
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
