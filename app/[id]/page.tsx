'use client';

import { EmailListHeader } from '../components/EmailHeader/EmailListHeader';
import { InboxMails } from '../components/InboxMails/InboxMails';
import { usePathname } from 'next/navigation';

export default function Mail() {
  const pathname = usePathname();

  console.log('pathname ====> ', pathname);
  return (
    <>
      <EmailListHeader />
      <InboxMails />
    </>
  );
}
