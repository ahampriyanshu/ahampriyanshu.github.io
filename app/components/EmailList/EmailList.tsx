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
  // (email.type === typeFilter &&
  //   email.isActive &&
  //   (!tag || email.tag === tag)) ||
  // filterMails(typeFilter, email)

  if (type === 'bin') {
    return !email.isActive;
  }

  if (type === 'draft') {
    return email.isActive;
  }

  switch (type) {
    case 'inbox':
      return email.tag === tag;
    case 'starred':
      return email.isFav;
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
  console.log(selectedTag, typeFilter);
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
