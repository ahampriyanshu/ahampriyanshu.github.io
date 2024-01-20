import { EmailAttributes } from '@/types';
import {
  EMAIL_STORAGE_KEY,
  SEARCH_HISTORY_STORAGE_KEY,
} from '../constants/common.constants';
import { isServer } from '../utils/common';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import {
  createEmailInLocalStorage,
  getEmailsFromLocalStorage,
  setRecentDate,
} from '../utils/localStorage';
import { MAIL_DATA } from '../data/links.data';

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

  const createDraftMail = (createNew = false) => {
    if (isServer) return;
    const email: EmailAttributes = {
      id: 'draft',
      sender: {
        name: MAIL_DATA.NAME,
        email: MAIL_DATA.EMAIL,
      },
      subject: MAIL_DATA.SUBJECT,
      summary: MAIL_DATA.BODY,
      priority: 1,
      type: 'draft',
      isFav: false,
      isActive: true,
      isOpened: true,
    };

    const emails = getEmailsFromLocalStorage();
    const isDraftMail = emails.some((mail) => mail.id === 'draft');

    if (!isDraftMail) {
      if (createNew) {
        createEmailInLocalStorage(email);
        dispatch({ type: 'PUSH_EMAIL', payload: email });
      }
    } else if (!createNew) {
      dispatch({ type: 'PUSH_EMAIL', payload: email });
    }
  };

  const getSearchHistoryFromLocalStorage = () => {
    if (isServer) return [];
    const searchHistory = localStorage.getItem(SEARCH_HISTORY_STORAGE_KEY);
    return searchHistory ? JSON.parse(searchHistory) : [];
  };

  const updateSearchHistory = (term: string) => {
    if (isServer) return;
    const searchHistory = getSearchHistoryFromLocalStorage();
    const updatedHistory = [
      term,
      ...searchHistory.filter((item: string) => String(item) !== term),
    ].slice(0, 10);
    localStorage.setItem(
      SEARCH_HISTORY_STORAGE_KEY,
      JSON.stringify(updatedHistory)
    );
  };

  return {
    setEmailsToLocalStorage,
    updateEmailArgs,
    createDraftMail,
    getSearchHistoryFromLocalStorage,
    updateSearchHistory,
  };
};
