'use client';
import React, { use, useContext, useEffect } from 'react';
import styles from './email-list.module.scss';
import { EmailAttributes, EmailTag, EmailType } from '@/types';
import { EmailItem } from './EmailItem';
import { AppContext } from '@/app/AppContext';
import { PRODUCT_TOUR } from '@/app/constants/common.constants';

type EmailListProps = {
  typeFilter: EmailType;
  selectedTag: EmailTag | null;
};

const filterMails = (
  email: EmailAttributes,
  type: EmailType,
  tag: EmailTag | null,
  searchParam: string
) => {
  switch (type) {
    case 'inbox':
      return email.tag === tag && email.isActive;
    case 'starred':
      return email.isFav;
    case 'draft':
      return email.type === 'draft' && email.isActive;
    case 'bin':
      return !email.isActive;
    case 'search':
      return ['subject', 'summary', 'id'].some((prop) =>
        (email as any)[prop].toLowerCase().includes(searchParam.toLowerCase())
      );
    default:
      return false;
  }
};

export const EmailList = ({ selectedTag, typeFilter }: EmailListProps) => {
  const { state, dispatch } = useContext(AppContext);
  const { emails = [], searchParam = '' } = state || {};
  const filteredEmails = Array.isArray(emails)
    ? emails?.filter((email) =>
        filterMails(email, typeFilter, selectedTag, searchParam)
      )
    : [];

  useEffect(() => {
    if (typeFilter === 'inbox') {
      dispatch({ type: 'SET_SEARCH_PARAM', payload: '' });
    } else if (typeFilter !== 'search') {
      dispatch({ type: 'SET_SEARCH_PARAM', payload: `in: ${typeFilter}` });
    }
  }, [typeFilter, dispatch]);

  return (
    <div id={PRODUCT_TOUR.SECOND_STEP} className={styles.emails_container}>
      {filteredEmails?.length > 0 ? (
        filteredEmails.map((email, index) => (
          <EmailItem key={index} email={email} />
        ))
      ) : (
        <div className={styles.no_emails}>
          {typeFilter === 'search'
            ? 'No messages matched your search. Try using search options such as sender, date, size and more.'
            : `No ${typeFilter === 'bin' ? 'trashed' : typeFilter} messages.`}
        </div>
      )}
    </div>
  );
};
