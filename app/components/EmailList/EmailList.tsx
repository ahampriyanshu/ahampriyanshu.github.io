'use client';
import React from 'react';
import styles from './email-list.module.scss';
import { EmailAttributes, EmailTag, EmailType } from '@/types';
import { EmailItem } from './EmailItem';

type EmailListProps = {
  emails: EmailAttributes[];
  selectedTag: EmailTag;
  typeFilter: EmailType;
};

export const EmailList = ({
  emails,
  selectedTag,
  typeFilter,
}: EmailListProps) => {
  const filterEmails = emails.filter(
    (email) =>
      email.type === typeFilter && (!selectedTag || email.tag === selectedTag)
  );

  return (
    <div className={styles.emails_container}>
      {filterEmails.length > 0 ? (
        filterEmails.map((email, index) => (
          <EmailItem key={index} email={email} />
        ))
      ) : (
        <div className={styles.no_emails}>No chat messages</div>
      )}
    </div>
  );
};
