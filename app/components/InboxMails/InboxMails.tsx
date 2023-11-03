'use client';
import React, { useContext } from 'react';
import styles from './inbox-mails.module.scss';
import { AppContext } from '@/app/AppContext';
import {
  Inbox,
  InboxFilled,
  Sell,
  SellFilled,
  Social,
  SocialFilled,
} from '../Icons/Icons';
import { INBOX_FILTER_ACTIVE_COLOR } from '@/app/constants/ui.constants';

export const InboxMails = () => {
  const { state, dispatch } = useContext(AppContext);

  const setFilterParam = (mailType: string) => {
    dispatch({ type: 'SET_FILTER_PARAM', payload: mailType });
  };
  const selectedFilterParam = state?.filterParam || 'inbox';

  return (
    <div className={styles.filters}>
      <div
        className={`${styles.filter} ${
          'inbox' === selectedFilterParam ? styles.active : ''
        } `}
        onClick={() => setFilterParam('inbox')}
      >
        {'inbox' === selectedFilterParam ? (
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
          className={
            'inbox' === selectedFilterParam ? styles.underline : 'none'
          }
        ></div>
      </div>
      <div
        className={`${styles.filter} ${
          'promotions' === selectedFilterParam ? styles.active : ''
        } `}
        onClick={() => setFilterParam('promotions')}
      >
        {'promotions' === selectedFilterParam ? (
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
            'promotions' === selectedFilterParam ? styles.underline : 'none'
          }
        ></div>
      </div>{' '}
      <div
        className={`${styles.filter} ${
          'social' === selectedFilterParam ? styles.active : ''
        } `}
        onClick={() => setFilterParam('social')}
      >
        {'social' === selectedFilterParam ? (
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
          className={
            'social' === selectedFilterParam ? styles.underline : 'none'
          }
        ></div>
      </div>
    </div>
  );
};
