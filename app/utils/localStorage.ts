import { EmailAttributes } from '@/types';
import { LOCAL_STORAGE_KEY } from '../constants/data.constants';
import { isServer } from './common';
// import { inboxEmails } from '../data';

export const getEmailsFromLocalStorage = (): EmailAttributes[] => {
  if (isServer) return [] as EmailAttributes[];
  const storedEmails = localStorage?.getItem(LOCAL_STORAGE_KEY);
  return storedEmails ? JSON.parse(storedEmails) : [];
};

export const setEmailsToLocalStorage = (emails: EmailAttributes[]) => {
  if (isServer) return;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(emails));
};

export const updateEmailInLocalStorage = (updatedEmail: EmailAttributes) => {
  const storedEmails = getEmailsFromLocalStorage();
  const updatedEmails = storedEmails.map((email) =>
    email.id === updatedEmail.id ? updatedEmail : email
  );
  setEmailsToLocalStorage(updatedEmails);
};

export const createEmailInLocalStorage = (newEmail: EmailAttributes) => {
  console.log(`data: ${newEmail} ${new Date().toLocaleTimeString()}}`);
  const storedEmails = getEmailsFromLocalStorage();
  const updatedEmails = [...storedEmails, newEmail];
  setEmailsToLocalStorage(updatedEmails);
};

export const deleteEmailFromLocalStorage = (emailId: string) => {
  const storedEmails = getEmailsFromLocalStorage();
  const updatedEmails = storedEmails.filter((email) => email.id !== emailId);
  setEmailsToLocalStorage(updatedEmails);
};