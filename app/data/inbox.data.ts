import { EmailAttributes } from '@/types';

export const emails: EmailAttributes[] = [
  {
    id: 'linkedin',
    selected: false,
    fav: false,

    subject: 'I want to connect',
    summary:
      "join your LinkedIn network. Hi there, I'd like to join your professional network.",
    body: 'Hi, just a reminder that we have a meeting tomorrow at 10:00 AM.',
    time: '2023-01-01T10:00:00',
    priority: 1,
    read: false,
    sender: {
      name: 'Priyanshu Tiwari',
      logo: 'linkedin.png',
      email: 'invitations@linkedin.com',
    },
    type: 'inbox',
    tag: 'inbox',
  },
  {
    id: 'drive',
    selected: false,
    fav: false,
    sender: {
      name: 'Priyanshu (via Google Drive)',
      email: 'drive-shares-dm-noreply@google.com',
    },
    subject: 'Item shared with you: ‘Resume.pdf’',
    summary:
      "Priyanshu shared an item Priyanshu (ahampriyanshu@gmail.com) has shared the following item: Vaibhav-Resume.pdf Open If you don't want to receive files from this person, block the sender from Drive",
    file: {
      name: 'Resume.pdf',
      size: '1.2 MB',
      type: 'pdf',
    },
    time: '2021-10-31T10:00:00',
    priority: 2,
    read: false,
    type: 'inbox',
    tag: 'inbox',
  },
  {
    selected: false,
    fav: false,
    sender: {
      name: 'Priyanshu (via Google.',
      logo: 'linkedin.png',
      email: 'invitations@linkedin.com',
    },
    subject: 'Top DSA Coder Boss Expert Pvt Ltd',
    body: 'Hey, I wanted to discuss our vacation plans for next month. Can we meet tomorrow?',
    time: '2022-01-02T15:30:00',
    priority: 3,
    read: false,
    type: 'inbox',
    tag: 'promotions',
  },
];
