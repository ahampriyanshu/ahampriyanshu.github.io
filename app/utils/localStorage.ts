import { EmailAttributes } from '@/types';
import { isServer } from './common';
import {
  INITIAL_ACTIVITY_KEY,
  EMAIL_STORAGE_KEY,
  RECENT_ACTIVITY_KEY,
} from '../constants/common.constants';

export const setInitialDate = () => {
  if (isServer) return;
  localStorage.setItem(INITIAL_ACTIVITY_KEY, new Date().toISOString());
};

export const getInitialDate = (): string => {
  if (isServer) return '';
  return localStorage.getItem(INITIAL_ACTIVITY_KEY) || '';
};

export const setRecentDate = () => {
  if (isServer) return;
  localStorage.setItem(RECENT_ACTIVITY_KEY, new Date().toISOString());
};

export const getRecentDate = (): string => {
  if (isServer) return '';
  return localStorage.getItem(RECENT_ACTIVITY_KEY) || '';
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

export const createEmailInLocalStorage = (newEmail: EmailAttributes) => {
  const storedEmails = getEmailsFromLocalStorage();
  const updatedEmails = [...storedEmails, newEmail];
  setEmailsToLocalStorage(updatedEmails);
};
