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

function Header() {
  const { dispatch } = useContext(AppContext);
  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar_toggle_container}>
        <IconBtn onClick={toggleSidebar}>
          <HamburgerMenu />
        </IconBtn>
        <h1>{site.title}</h1>
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
          <IconBtn padding='6px'>
            <QuestionMark />
          </IconBtn>

          <IconBtn padding='6px'>
            <Settings />
          </IconBtn>

          <IconBtn padding='6px'>
            <GridMenu />
          </IconBtn>
          <Tooltip content="Hello, I'm a tooltip" direction='bottom'>
            <IconBtn padding='6px'>
              <Image src='/logo.png' alt='logo' width={28} height={28} />
            </IconBtn>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
