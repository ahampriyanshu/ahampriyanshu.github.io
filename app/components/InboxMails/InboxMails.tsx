'use client';
import React, { useContext, useState } from 'react';
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
import { EmailList } from '../EmailList/EmailList';
import { EmailTag } from '@/types';

export const InboxMails = () => {
  const [selectedTag, setSelectedTag] = useState<EmailTag>('primary');
  const { state } = useContext(AppContext);
  const typeFilter = state?.filterParam || 'inbox';
  return (
    <div className='h-100'>
      {typeFilter === 'inbox' ? (
        <div className={styles.filters}>
          <div
            className={`${styles.filter} ${
              'primary' === selectedTag ? styles.active : ''
            } `}
            onClick={() => setSelectedTag('primary')}
          >
            {'primary' === selectedTag ? (
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
              className={'primary' === selectedTag ? styles.underline : 'none'}
            ></div>
          </div>
          <div
            className={`${styles.filter} ${
              'promotions' === selectedTag ? styles.active : ''
            } `}
            onClick={() => setSelectedTag('promotions')}
          >
            {'promotions' === selectedTag ? (
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
                'promotions' === selectedTag ? styles.underline : 'none'
              }
            ></div>
          </div>{' '}
          <div
            className={`${styles.filter} ${
              'social' === selectedTag ? styles.active : ''
            } `}
            onClick={() => setSelectedTag('social')}
          >
            {'social' === selectedTag ? (
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
              className={'social' === selectedTag ? styles.underline : 'none'}
            ></div>
          </div>
        </div>
      ) : null}

      <EmailList
        typeFilter={typeFilter}
        selectedTag={typeFilter === 'inbox' ? selectedTag : null}
      />
    </div>
  );
};
