'use client';
import { memo, useContext } from 'react';
import styles from './header.module.scss';
import {
  Filters,
  GridMenu,
  HamburgerMenu,
  IconBtn,
  QuestionMark,
  Search,
  Settings,
} from '@/app/components/Icons/Icons';
import { AppContext } from '@/app/AppContext';
import Image from 'next/image';
import Tooltip from '../Tooltip/Tooltip';
import { site } from '@/app/config';
import { useRouter } from 'next/navigation';
import { openInNewTab } from '@/app/utils/common';

function Header() {
  const { dispatch } = useContext(AppContext);
  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.sidebar_toggle_container}>
        <Tooltip content='Main Menu'>
          <IconBtn onClick={toggleSidebar}>
            <HamburgerMenu />
          </IconBtn>
        </Tooltip>

        <div onClick={() => router.push('/')} className='flex-row-center hover'>
          <Image src='/logo.png' alt='logo' width={32} height={32} />
          <h1>{site.title}</h1>
        </div>
      </div>

      <div className={styles.header_profile_container}>
        <div className={styles.search_bar_container}>
          <IconBtn
            style={{
              position: 'absolute',
              left: 0,
              top: 6,
              padding: 6,
            }}
          >
            <Search />
          </IconBtn>
          <IconBtn
            disabled
            style={{
              position: 'absolute',
              right: '-96px',
              top: 6,
              padding: 6,
            }}
          >
            <Filters />
          </IconBtn>

          <input
            type='text'
            className={styles.search_input}
            placeholder='Search mail'
          ></input>
        </div>

        <div className={styles.logo_container}>
          <Tooltip content='Support'>
            <IconBtn padding='6px'>
              <QuestionMark />
            </IconBtn>
          </Tooltip>

          <Tooltip content='Settings'>
            <IconBtn padding='6px'>
              <Settings />
            </IconBtn>
          </Tooltip>

          <Tooltip content='Apps'>
            <IconBtn padding='6px'>
              <GridMenu />
            </IconBtn>
          </Tooltip>

          <Tooltip content='Account'>
            <IconBtn
              onClick={() =>
                openInNewTab('https://www.youtube.com/watch?v=pIKlq1r6gdY')
              }
              padding='6px'
            >
              <Image
                style={{
                  borderRadius: '50%',
                }}
                src='/norm.png'
                alt='logo'
                width={30}
                height={30}
              />
            </IconBtn>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
