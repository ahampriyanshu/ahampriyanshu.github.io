'use client';
import { memo, useContext } from 'react';
import styles from './header.module.scss';
import {
  GridMenu,
  HamburgerMenu,
  IconBtn,
  QuestionMark,
  Settings,
} from '@/app/components/Icons/Icons';
import { AppContext } from '@/app/AppContext';
import Image from 'next/image';
import Tooltip from '../Tooltip/Tooltip';
import { site } from '@/app/config';
import { useRouter } from 'next/navigation';
import { openInNewTab } from '@/app/utils/common';
import { HEADER, LINKEDIN_PROFILE } from '@/app/data/links.data';
import { Search } from '../Search/Search';

function Header() {
  const router = useRouter();
  const { dispatch } = useContext(AppContext);
  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar_toggle_container}>
        <Tooltip content='Main Menu'>
          <IconBtn onClick={toggleSidebar}>
            <HamburgerMenu />
          </IconBtn>
        </Tooltip>

        <div onClick={() => router.push('/')} className='flex-row-center hover'>
          <Image src='/zmail.png' alt='logo' width={32} height={32} />
          <h1>{site.title}</h1>
        </div>
      </div>

      <div className={styles.header_profile_container}>
        <Search />

        <div className={styles.logo_container}>
          <Tooltip content='Support'>
            <IconBtn onClick={() => openInNewTab(HEADER.SUPPORT)} padding='6px'>
              <QuestionMark />
            </IconBtn>
          </Tooltip>

          <Tooltip content='Settings'>
            <IconBtn onClick={() => openInNewTab(HEADER.SETUP)} padding='6px'>
              <Settings />
            </IconBtn>
          </Tooltip>

          <Tooltip content='Apps'>
            <IconBtn onClick={() => openInNewTab(HEADER.APPS)} padding='6px'>
              <GridMenu />
            </IconBtn>
          </Tooltip>

          <Tooltip content='Account'>
            <IconBtn
              onClick={() => openInNewTab(LINKEDIN_PROFILE)}
              padding='6px'
            >
              <Image
                style={{
                  borderRadius: '50%',
                }}
                src='/avatar.png'
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
