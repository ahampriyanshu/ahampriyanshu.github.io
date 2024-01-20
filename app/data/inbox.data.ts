import { EmailAttributes } from '@/types';

export const defaultData: EmailAttributes[] = [
  {
    id: 'linkedin',
    subject: 'I want to connect',
    summary:
      "join your LinkedIn network. Hi there, I'd like to join your professional network.",
    body: 'Hi, just a reminder that we have a meeting tomorrow at 10:00 AM.',
    priority: 1,
    sender: {
      name: 'Priyanshu Tiwari',
      logo: 'linkedin.png',
      email: 'invitations@linkedin.com',
    },
    type: 'inbox',
    tag: 'primary',
  },
  {
    id: 'drive',
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
    priority: 2,
    type: 'inbox',
    tag: 'primary',
  },
];
