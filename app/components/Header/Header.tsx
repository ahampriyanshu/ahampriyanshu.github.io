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
import Shepherd from 'shepherd.js';
import { offset } from '@floating-ui/dom';
import 'shepherd.js/dist/css/shepherd.css';
import { PRODUCT_TOUR } from '@/app/constants/common.constants';

function Header() {
  const router = useRouter();
  const { dispatch } = useContext(AppContext);
  const [isHelperOpen, setIsHelperOpen] = useState(false);

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };

  const startProductTour = () => {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        modalOverlayOpeningRadius: 12,
        classes: 'tour_tooltip',
      },
      exitOnEsc: false,
      keyboardNavigation: true,
      useModalOverlay: true,
    });
    tour.addSteps([
      {
        id: `${PRODUCT_TOUR.FIRST_STEP}`,
        title: 'Welcome to Zmail',
        text: 'Gmail styled portfolio app in NextJS. Click next to continue.',
        attachTo: { element: `#${PRODUCT_TOUR.FIRST_STEP}`, on: 'right' },
        canClickTarget: false,
        floatingUIOptions: {
          middleware: [offset({ mainAxis: 24, crossAxis: 0 })],
        },
        buttons: [
          {
            text: 'Skip',
            classes: 'tour_button secondary_button',
            action: tour.cancel,
          },
          {
            text: 'Next',
            classes: 'tour_button',
            action: tour.next,
          },
        ],
      },
      {
        id: `${PRODUCT_TOUR.SECOND_STEP}`,
        title: 'Welcome to Zmail',
        text: 'Gmail styled portfolio app in NextJS. Click next to continue.',
        attachTo: { element: `#${PRODUCT_TOUR.SECOND_STEP}`, on: 'bottom' },
        canClickTarget: false,
        floatingUIOptions: {
          middleware: [offset({ mainAxis: 24, crossAxis: 0 })],
        },
        buttons: [
          {
            text: 'Back',
            classes: 'tour_button secondary_button',
            action: tour.back,
          },
          {
            text: 'Next',
            classes: 'tour_button',
            action: tour.next,
          },
        ],
      },
      {
        id: `${PRODUCT_TOUR.THIRD_STEP}`,
        title: 'Welcome to Zmail',
        text: 'Gmail styled portfolio app in NextJS. Click next to continue.',
        attachTo: { element: `#${PRODUCT_TOUR.THIRD_STEP}`, on: 'right' },
        canClickTarget: false,
        floatingUIOptions: {
          middleware: [offset({ mainAxis: 24, crossAxis: 0 })],
        },
        buttons: [
          {
            text: 'Back',
            classes: 'tour_button secondary_button',
            action: tour.back,
          },
          {
            text: 'Next',
            classes: 'tour_button',
            action: tour.next,
          },
        ],
      },
      {
        id: `${PRODUCT_TOUR.FOURTH_STEP}`,
        title: 'Welcome to Zmail',
        text: 'Gmail styled portfolio app in NextJS. Click next to continue.',
        attachTo: { element: `#${PRODUCT_TOUR.FOURTH_STEP}`, on: 'bottom' },
        canClickTarget: false,
        floatingUIOptions: {
          middleware: [offset({ mainAxis: 24, crossAxis: 0 })],
        },
        buttons: [
          {
            text: 'Back',
            classes: 'tour_button secondary_button',
            action: tour.back,
          },
          {
            text: 'Next',
            classes: 'tour_button',
            action: tour.next,
          },
        ],
      },
      {
        id: `${PRODUCT_TOUR.FIFTH_STEP}`,
        title: 'Welcome to Zmail',
        text: 'Gmail styled portfolio app in NextJS. Click next to continue.',
        attachTo: { element: `#${PRODUCT_TOUR.FIFTH_STEP}`, on: 'right' },
        canClickTarget: false,
        floatingUIOptions: {
          middleware: [offset({ mainAxis: 24, crossAxis: 0 })],
        },
        buttons: [
          {
            text: 'Back',
            classes: 'tour_button secondary_button',
            action: tour.back,
          },
          {
            text: 'Next',
            classes: 'tour_button',
            action: tour.next,
          },
        ],
      },
      {
        id: `${PRODUCT_TOUR.SIXTH_STEP}`,
        title: `That's all for now!`,
        text: 'Gmail styled portfolio app in NextJS. Click next to continue.',
        attachTo: { element: `#${PRODUCT_TOUR.SIXTH_STEP}`, on: 'right' },
        canClickTarget: false,
        floatingUIOptions: {
          middleware: [offset({ mainAxis: 24, crossAxis: 0 })],
        },
        buttons: [
          {
            text: 'Back',
            classes: 'tour_button secondary_button',
            action: tour.back,
          },
          {
            text: 'Done',
            classes: 'tour_button',
            action: tour.complete,
          },
        ],
      },
    ]);

    tour.start();
  };

  return (
    <div id={PRODUCT_TOUR.FOURTH_STEP} className={styles.container}>
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
          <Popover
            trigger={
              <Tooltip content='Support'>
                <IconBtn
                  onClick={() => {
                    setIsHelperOpen(!isHelperOpen);
                  }}
                  padding='6px'
                >
                  <QuestionMark />
                </IconBtn>
              </Tooltip>
            }
            content={
              <div
                id={PRODUCT_TOUR.SIXTH_STEP}
                className={styles.support_container}
              >
                <div className={styles.support_body}>
                  <div onClick={startProductTour}>Help</div>
                  <div onClick={() => openInNewTab(HEADER.UPDATE_HISTORY)}>
                    Updates
                  </div>
                  <span className={styles.divider} />
                  <div onClick={() => openInNewTab(HEADER.FEEDBACK_FORM)}>
                    Send feedback to me
                  </div>
                </div>
              </div>
            }
          />

          <Tooltip content='Settings'>
            <IconBtn onClick={() => openInNewTab(HEADER.SETUP)} padding='6px'>
              <Settings />
            </IconBtn>
          </Tooltip>

          <Popover
            trigger={
              <Tooltip id={PRODUCT_TOUR.FIFTH_STEP} content='Apps'>
                <IconBtn padding='6px'>
                  <GridMenu />
                </IconBtn>
              </Tooltip>
            }
            content={
              <div className={styles.apps_container}>
                <div className={styles.apps_body}>
                  <div
                    onClick={() => openInNewTab(HEADER.ACCOUNT)}
                    className={styles.apps_icon}
                  >
                    <Image
                      src='/user.jpg'
                      alt='linkedin profile'
                      width={48}
                      height={48}
                      className={styles.apps_icon_image}
                    />
                    <span className={styles.apps_icon_text}>LinkedIn</span>
                  </div>

                  <div
                    onClick={() => openInNewTab(HEADER.ACCOUNT)}
                    className={styles.apps_icon}
                  >
                    <Image
                      src='/user.jpg'
                      alt='linkedin profile'
                      width={48}
                      height={48}
                      className={styles.apps_icon_image}
                    />
                    <span className={styles.apps_icon_text}>LinkedIn</span>
                  </div>

                  <div
                    onClick={() => openInNewTab(HEADER.ACCOUNT)}
                    className={styles.apps_icon}
                  >
                    <Image
                      src='/user.jpg'
                      alt='linkedin profile'
                      width={48}
                      height={48}
                      className={styles.apps_icon_image}
                    />
                    <span className={styles.apps_icon_text}>LinkedIn</span>
                  </div>
                  <button>More from Google Workspace Marketplace</button>
                </div>
              </div>
            }
          />

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
