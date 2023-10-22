import styles from './sidebar.module.scss';
import Image from 'next/image';

export function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.compose_btn}>
        <button>
          <div>
            <Image
              src='/icons/edit.png'
              alt='edit icon'
              width={20}
              height={20}
            />
          </div>
          Compose
        </button>
      </div>
    </div>
  );
}
