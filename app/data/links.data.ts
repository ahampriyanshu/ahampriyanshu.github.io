export const GITHUB_PROFILE = 'https://github.com/ahampriyanshu';

export type ProfileType = {
  img: string;
  title: string;
  username: string;
  link: string;
};

export type ProfileDataType = {
  [key: string]: ProfileType;
};

export const PROFILE_DATA: ProfileDataType = {
  github: {
    img: '/icons/github.png',
    title: 'GitHub',
    username: 'ahampriyanshu',
    link: 'https://github.com/ahampriyanshu',
  },
  linkedin: {
    img: '/icons/linkedin.png',
    title: 'LinkedIn',
    username: 'ahampriyanshu',
    link: 'https://www.linkedin.com/in/ahampriyanshu',
  },
  codeforces: {
    img: '/icons/codeforces.svg',
    title: 'Codeforces',
    username: 'ahampriyanshu',
    link: 'https://codeforces.com/profile/ahampriyanshu',
  },
  leetcode: {
    img: '/icons/leetcode.png',
    title: 'LeetCode',
    username: 'ahampriyanshu',
    link: 'https://leetcode.com/ahampriyanshu',
  },
  hackerrank: {
    img: '/icons/hackerrank.png',
    title: 'HackerRank',
    username: 'ahampriyanshu',
    link: 'https://www.hackerrank.com/ahampriyanshu',
  },
  kaggle: {
    img: '/icons/kaggle.png',
    title: 'Kaggle',
    username: 'ahampriyanshu',
    link: 'https://www.kaggle.com/ahampriyanshu',
  },
  telegram: {
    img: '/icons/telegram.svg',
    title: 'Telegram',
    username: 'ahampriyanshu',
    link: 'https://t.me/ahampriyanshu',
  },
};

export const HEADER = {
  SUPPORT: 'https://github.com/ahampriyanshu/ahampriyanshu.github.io',
  APPS: 'https://gist.github.com/ahampriyanshu/7c38b9370b8c1baf009f868ac775134e',
  SETUP: 'https://github.com/ahampriyanshu/ahampriyanshu.github.io#setup',
  ACCOUNT: 'https://myaccount.google.com/u/0/?nlr=1',
  FEEDBACK_FORM: 'https://qke8euxur5q.typeform.com/to/wMrmQrsQ',
  UPDATE_HISTORY:
    'https://github.com/ahampriyanshu/ahampriyanshu.github.io/commits/main',
  WORKSPACE: 'https://workspace.google.com/marketplace?pann=ogb',
};

export const MAIL_DATA = {
  NAME: 'Priyanshu',
  EMAIL: 'ahampriyanshu@gmail.com',
  SUBJECT: 'Hi Priyanshu',
  BODY: 'Hello, hope you are doing well.',
};
