'use client';
import React, { useContext } from 'react';
import styles from './inbox-selector.module.scss';
import { AppContext } from '@/app/AppContext';
import {
  Inbox,
  InboxFilled,
  Sell,
  SellFilled,
  Social,
  SocialFilled,
} from '../Icons/Icons';
import { INBOX_FILTER_ACTIVE_COLOR } from '@/app/constants/colors.constants';

export const InboxSelector = () => {
  const { state, dispatch } = useContext(AppContext);

  const setSelectedMail = (mailType: string) => {
    dispatch({ type: 'SET_SELECTED_MAIL', payload: mailType });
  };
  const selectedMailType = state?.selectedMail || 'inbox';

  return (
    <div className={styles.filters}>
      <div
        className={`${styles.filter} ${
          'inbox' === selectedMailType ? styles.active : ''
        } `}
        onClick={() => setSelectedMail('inbox')}
      >
        {'inbox' === selectedMailType ? (
          <InboxFilled
            height={18}
            width={18}
            strokeColor={INBOX_FILTER_ACTIVE_COLOR}
          />
        ) : (
          <Inbox height={18} width={18} />
        )}

        <div className={styles.title}>primary</div>

        <div
          className={'inbox' === selectedMailType ? styles.underline : 'none'}
        ></div>
      </div>
      <div
        className={`${styles.filter} ${
          'promotions' === selectedMailType ? styles.active : ''
        } `}
        onClick={() => setSelectedMail('promotions')}
      >
        {'promotions' === selectedMailType ? (
          <SellFilled
            height={18}
            width={18}
            strokeColor={INBOX_FILTER_ACTIVE_COLOR}
          />
        ) : (
          <Sell height={18} width={18} />
        )}

        <div className={styles.title}>promotions</div>
        <div
          className={
            'promotions' === selectedMailType ? styles.underline : 'none'
          }
        ></div>
      </div>{' '}
      <div
        className={`${styles.filter} ${
          'social' === selectedMailType ? styles.active : ''
        } `}
        onClick={() => setSelectedMail('social')}
      >
        {'social' === selectedMailType ? (
          <SocialFilled
            height={18}
            width={18}
            strokeColor={INBOX_FILTER_ACTIVE_COLOR}
          />
        ) : (
          <Social height={18} width={18} />
        )}

        <div className={styles.title}>social</div>
        <div
          className={'social' === selectedMailType ? styles.underline : 'none'}
        ></div>
      </div>
    </div>
  );
};
