import Image from 'next/image';
import styles from './linkedin.module.scss';
import { FAIR_USAGE } from '@/app/constants/msg.constants';
import { History, Person } from '@/app/components/Icons/Icons';
import { openInNewTab } from '@/app/utils/common';

export const LinkedIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.banner}>
            <Image
              src={`/content/li_banner.png`}
              alt={`linkedin banner`}
              width={92}
              height={30}
            />
            <Image
              src={`/content/li_profile.png`}
              alt={`linkedin profile`}
              width={32}
              height={32}
              style={{
                borderRadius: '50%',
              }}
            />
          </div>
          <div className={styles.profile}>
            <Image
              src={`/content/li_profile.png`}
              alt={`linkedin profile`}
              width={64}
              height={64}
              style={{
                borderRadius: '50%',
              }}
            />
            <h3>Priyanshu Tiwari</h3>
            <h4>Software Engineer @ HackerRank </h4>
          </div>

          <hr />
        </div>
        <div className={styles.credits}>{FAIR_USAGE}</div>
      </div>
    </div>
  );
};
