'use client';
import { memo, useContext } from 'react';
import styles from './sidebar.module.scss';
import Image from 'next/image';
import { AppContext } from '@/app/AppContext';

function Sidebar() {
  const { state } = useContext(AppContext);

  const isSideBarOpen = state?.isSideBarOpen || false;

  return (
    <div
      className={`${styles.container} ${
        isSideBarOpen ? styles.active : styles.collapsed
      }`}
    >
      <div className={styles.compose_btn}>
        <button>
          <div>
            <Image
              src='/icons/edit.png'
              alt='edit icon'
              width={24}
              height={24}
            />
          </div>
          <span>Compose</span>
        </button>
      </div>
    </div>
  );
}

export default memo(Sidebar);
