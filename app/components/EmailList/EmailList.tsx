'use client';
import React, { useContext } from 'react';
import styles from './email-list.module.scss';
import { EmailTag, EmailType } from '@/types';
import { EmailItem } from './EmailItem';
import { AppContext } from '@/app/AppContext';

type EmailListProps = {
  selectedTag: EmailTag;
  typeFilter: EmailType;
};

export const EmailList = ({ selectedTag, typeFilter }: EmailListProps) => {
  const { state } = useContext(AppContext);
  const { emails = [] } = state || {};
  console.log(state);
  const filteredEmails =
    emails?.filter(
      (email) =>
        email.type === typeFilter && (!selectedTag || email.tag === selectedTag)
    ) || [];

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
