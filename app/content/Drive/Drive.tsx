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

        <button className={styles.cta_btn}>Open</button>
      </div>
    </div>
  );
};
