import Image from 'next/image';
import styles from './drive.module.scss';

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
          <div className={styles.thumbnail} />
        </div>
        <button className={styles.cta_btn}>Open</button>
        <div className={styles.unsubscribe}>
          If you don&apos;t want to receive files from this person,{' '}
          <span>block the sender</span> from Drive
        </div>
      </div>
      <div className={styles.credits}>
        <div className={styles.text}>sdfsdfds</div>
        <Image src='/avatar.png' alt='logo' width={48} height={48} />
      </div>
    </div>
  );
};
