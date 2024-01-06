import { EmailAttributes } from '@/types';
import { EMAIL_STORAGE_KEY } from '../constants/common.constants';
import { isServer } from '../utils/common';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import {
  getEmailsFromLocalStorage,
  setRecentDate,
} from '../utils/localStorage';

const useEmailActions = () => {
  const { state, dispatch } = useContext(AppContext);

  const setEmailsToLocalStorage = (emails: EmailAttributes[]) => {
    if (isServer) return;
    localStorage.setItem(EMAIL_STORAGE_KEY, JSON.stringify(emails));
  };

  const updateEmailInLocalStorage = (
    emailId: string,
    args: Partial<EmailAttributes>
  ) => {
    if (isServer) return;
    const emails = getEmailsFromLocalStorage();
    const updatedEmails = emails.map((email) =>
      email.id === emailId ? { ...email, ...args } : email
    );
    localStorage.setItem(EMAIL_STORAGE_KEY, JSON.stringify(updatedEmails));
  };

  const toggleDeleteEmail = (emailId: string) => {
    const updatedEmails = state.emails.map((email) =>
      email.id === emailId ? { ...email, isDeleted: !email.isDeleted } : email
    );
    setEmailsToLocalStorage(updatedEmails);
    setRecentDate();
  };

  const toggleStarEmail = (emailId: string) => {
    const updatedEmails = state?.emails || [];

    // updatedEmails.map((email) => {
    //   return email.id === emailId ? { ...email, isFav: !email.isFav } : email;
    // });

    // setEmailsToLocalStorage(updatedEmails);
    setRecentDate();
    const foundEmail = updatedEmails.find((email) => email.id === emailId);
    // if (foundEmail) {
    //   dispatch({
    //     type: 'UPDATE_EMAIL',
    //     payload: state.emails.map((email) =>
    //       email.id === emailId ? { ...email, isfav: !email.isFav } : email
    //     ),
    //   });
    // }
  };

  return {
    setEmailsToLocalStorage,
    toggleDeleteEmail,
    toggleStarEmail,
    updateEmailInLocalStorage,
  };
};

export default useEmailActions;
