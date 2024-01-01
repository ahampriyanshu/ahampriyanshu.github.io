import { EmailAttributes } from '@/types';
import { isServer } from './common';
import {
  DATE_STORAGE_KEY,
  EMAIL_STORAGE_KEY,
} from '../constants/common.constants';

export const setDate = () => {
  if (isServer) return;
  localStorage.setItem(DATE_STORAGE_KEY, new Date().toISOString());
};

export const getDate = (): string => {
  if (isServer) return '';
  return localStorage.getItem(DATE_STORAGE_KEY) || '';
};

export const getEmailsFromLocalStorage = (): EmailAttributes[] => {
  if (isServer) return [] as EmailAttributes[];
  const storedEmails = localStorage?.getItem(EMAIL_STORAGE_KEY);
  return storedEmails ? JSON.parse(storedEmails) : [];
};

export const setEmailsToLocalStorage = (emails: EmailAttributes[]) => {
  if (isServer) return;
  localStorage.setItem(EMAIL_STORAGE_KEY, JSON.stringify(emails));
};

export const updateEmailInLocalStorage = (updatedEmail: EmailAttributes) => {
  const storedEmails = getEmailsFromLocalStorage();
  const updatedEmails = storedEmails.map((email) =>
    email.id === updatedEmail.id ? updatedEmail : email
  );
  setEmailsToLocalStorage(updatedEmails);
};

export const createEmailInLocalStorage = (newEmail: EmailAttributes) => {
  const storedEmails = getEmailsFromLocalStorage();
  const updatedEmails = [...storedEmails, newEmail];
  setEmailsToLocalStorage(updatedEmails);
};

export const deleteEmailFromLocalStorage = (emailId: string) => {
  const storedEmails = getEmailsFromLocalStorage();
  const updatedEmails = storedEmails.filter((email) => email.id !== emailId);
  setEmailsToLocalStorage(updatedEmails);
};
