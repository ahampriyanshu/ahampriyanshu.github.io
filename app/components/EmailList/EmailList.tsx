'use client';
import React, { useContext } from 'react';
import styles from './email-list.module.scss';
import { EmailAttributes, EmailTag, EmailType } from '@/types';
import { EmailItem } from './EmailItem';
import { AppContext } from '@/app/AppContext';

type EmailListProps = {
  selectedTag: EmailTag;
  typeFilter: EmailType;
};

const filterMails = (type: EmailType, email: EmailAttributes) => {
  switch (type) {
    case 'inbox':
      return email.isActive;
    case 'starred':
      return email.isFav;
    case 'bin':
      return !email.isActive;
    default:
      return false;
  }
};

export const EmailList = ({ selectedTag, typeFilter }: EmailListProps) => {
  const { state } = useContext(AppContext);
  const { emails = [] } = state || {};
  const filteredEmails = Array.isArray(emails)
    ? emails?.filter(
        (email) =>
          (email.type === typeFilter &&
            email.isActive &&
            (!selectedTag || email.tag === selectedTag)) ||
          filterMails(typeFilter, email)
      )
    : [];

  return (
    <div className={styles.emails_container}>
      {filteredEmails.length > 0 ? (
        filteredEmails.map((email, index) => (
          <EmailItem key={index} email={email} />
        ))
      ) : (
        <div className={styles.no_emails}>{`No ${
          typeFilter === 'bin' ? 'trashed' : typeFilter
        } messages.`}</div>
      )}
    </div>
  );
};
