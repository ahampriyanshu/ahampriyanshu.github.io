'use client';
import React, { useContext } from 'react';
import styles from './email-list.module.scss';
import { EmailAttributes, EmailTag, EmailType } from '@/types';
import { EmailItem } from './EmailItem';
import { AppContext } from '@/app/AppContext';

type EmailListProps = {
  typeFilter: EmailType;
  selectedTag: EmailTag | null;
};

const filterMails = (
  email: EmailAttributes,
  type: EmailType,
  tag: EmailTag | null
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
    default:
      return false;
  }
};

export const EmailList = ({ selectedTag, typeFilter }: EmailListProps) => {
  const { state } = useContext(AppContext);
  const { emails = [] } = state || {};
  const filteredEmails = Array.isArray(emails)
    ? emails?.filter((email) => filterMails(email, typeFilter, selectedTag))
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
