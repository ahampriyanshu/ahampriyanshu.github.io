'use client';
import { memo, useContext } from 'react';
import styles from './sidebar.module.scss';
import Image from 'next/image';
import { AppContext } from '@/app/AppContext';
import { links } from '@/app/config';

function Sidebar() {
  const { state, dispatch } = useContext(AppContext);

  const setSelectedMail = (mailType: string) => {
    dispatch({ type: 'SET_SELECTED_MAIL', payload: mailType });
  };
  const isSideBarOpen = state?.isSideBarOpen || false;
  const selectedMailType = state?.selectedMail || 1;

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

      <div className={styles.links}>
        {links.map((link, index) => (
          <div
            key={index}
            className={`${styles.link} ${
              link.type === selectedMailType ? styles.active : ''
            } `}
            onClick={() => setSelectedMail(link.type)}
          >
            <div
              style={{
                marginLeft: '26px',
              }}
              className={styles.content}
            >
              <Image
                src={`/icons/${
                  link.type === selectedMailType
                    ? link.type + '-active'
                    : link.type
                }.png`}
                alt={`${link.icon} icon`}
                width={24}
                height={24}
              />
              <div className={styles.title}>{link.type}</div>
            </div>
            <div
              style={{
                marginRight: '16px',
              }}
              className={styles.count}
            >
              {link.count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Sidebar);
