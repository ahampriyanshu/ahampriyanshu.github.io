'use client';
import { memo, useContext, useState } from 'react';
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
import { HEADER } from '@/app/data/links.data';
import { Search } from '../Search/Search';
import Popover from '../Popover/Popover';

function Header() {
  const router = useRouter();
  const { dispatch } = useContext(AppContext);
  const [isHelperOpen, setIsHelperOpen] = useState(false);

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
          <div className={styles.popover_container}>
            <Tooltip content='Support'>
              <IconBtn
                onClick={() => {
                  setIsHelperOpen(!isHelperOpen);
                  // openInNewTab(HEADER.SUPPORT);
                }}
                padding='6px'
              >
                <QuestionMark />
              </IconBtn>
            </Tooltip>
            <Popover isOpen={isHelperOpen}>
              <div className={styles.popover_support_body}>
                <div className={styles.popover_support_container}>
                  <div onClick={() => openInNewTab(HEADER.FEEDBACK_FORM)}>
                    Help
                  </div>
                  <div onClick={() => openInNewTab(HEADER.UPDATE_HISTORY)}>
                    Updates
                  </div>
                  <span className={styles.divider} />
                  <div onClick={() => openInNewTab(HEADER.FEEDBACK_FORM)}>
                    Send feedback to me
                  </div>
                </div>
              </div>
            </Popover>
          </div>

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
            <IconBtn onClick={() => openInNewTab(HEADER.ACCOUNT)} padding='6px'>
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
