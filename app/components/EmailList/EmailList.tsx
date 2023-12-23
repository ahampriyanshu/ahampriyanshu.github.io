'use client';
import React from 'react';
import styles from './email-list.module.scss';
import { EmailTag, EmailType } from '@/types';
import { EmailItem } from './EmailItem';
import { getEmailsFromLocalStorage } from '@/app/utils/localStorage';

type EmailListProps = {
  selectedTag: EmailTag;
  typeFilter: EmailType;
};

export const EmailList = ({ selectedTag, typeFilter }: EmailListProps) => {
  const emailList = getEmailsFromLocalStorage();

  const filterEmails = emailList.filter(
    (email) =>
      email.type === typeFilter && (!selectedTag || email.tag === selectedTag)
  );

  return (
    <div className={styles.emails_container}>
      <div>
        {filterEmails.length > 0 ? (
          filterEmails.map((email, index) => (
            <EmailItem key={index} email={email} />
          ))
        ) : (
          <div className={styles.no_emails}>No chat messages</div>
        )}
      </div>
    </div>
  );
};
