import { EmailAttributes } from '@/types';
import { EMAIL_STORAGE_KEY } from '../constants/common.constants';
import { isServer } from '../utils/common';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import {
  getEmailsFromLocalStorage,
  setRecentDate,
} from '../utils/localStorage';

export const useEmailActions = () => {
  const { dispatch } = useContext(AppContext);

  const setEmailsToLocalStorage = (emails: EmailAttributes[]) => {
    if (isServer) return;
    localStorage.setItem(EMAIL_STORAGE_KEY, JSON.stringify(emails));
  };

  const updateEmailArgs = (emailId: string, data: Partial<EmailAttributes>) => {
    if (isServer) return;
    const updatedEmails = getEmailsFromLocalStorage().map((email) =>
      email.id === emailId ? { ...email, ...data } : email
    );
    dispatch({
      type: 'UPDATE_EMAIL',
      payload: { emailId, data },
    });
    setEmailsToLocalStorage(updatedEmails);
    setRecentDate();
  };

  return {
    setEmailsToLocalStorage,
    updateEmailArgs,
  };
};
