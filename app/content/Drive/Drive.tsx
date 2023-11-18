import Image from 'next/image';
import styles from './drive.module.scss';
import { FAIR_USAGE } from '@/app/constants/msg.constants';
import { History, Person } from '@/app/components/Icons/Icons';
import { openInNewTab } from '@/app/utils/common';

export const Drive = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>Priyanshu shared an item</div>
        <div className={styles.sub_header}>
          <Image src='/avatar.png' alt='logo' width={48} height={48} />
          Priyanshu (ahampriyanshu@gmail.com) has shared the following item:
        </div>
        <div className={styles.preview}>
          <div className={styles.file}>
            <Image
              src={`/icons/pdf.png`}
              alt={`pdf icon`}
              width={16}
              height={16}
            />
            <span>Resume.pdf</span>
          </div>
          <div
            className={styles.thumbnail}
            onClick={() => openInNewTab('https://resume.ahampriyanshu.com/')}
          />
          <div className={styles.info}>
            <Person width={20} height={20} strokeColor='#5f6368' />
            <span>Priyanshu is the owner</span>
          </div>
          <div className={styles.info}>
            <History width={20} height={20} strokeColor='#5f6368' />
            <span> Last edited by Priyanshu 1 week ago</span>
          </div>
        </div>
        <button
          className={styles.cta_btn}
          onClick={() => openInNewTab('https://resume.ahampriyanshu.com/')}
        >
          Open
        </button>
        <div className={styles.unsubscribe}>
          If you don&apos;t want to receive files from this person,{' '}
          <span>block the sender</span> from Drive
        </div>
      </div>
      <div className={styles.credits}>{FAIR_USAGE}</div>
    </div>
  );
};
