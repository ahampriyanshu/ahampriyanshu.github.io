'use client';
import { memo, useContext } from 'react';
import styles from './header.module.scss';
import { HamburgerMenu, IconBtn } from '@/app/components/Icons/Icons';
import { AppContext } from '@/app/AppContext';

function Header() {
  const { dispatch } = useContext(AppContext);
  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <IconBtn onClick={toggleSidebar}>
          <HamburgerMenu />
        </IconBtn>
        <h1>Priyanshu</h1>
      </div>

      <div className={styles.search_bar_container}>
        <input type='text' placeholder='Search' />

        <div>
          <IconBtn>
            <HamburgerMenu />
          </IconBtn>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
