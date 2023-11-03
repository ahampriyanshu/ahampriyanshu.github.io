import { EmailListHeader } from './components/EmailHeader/EmailListHeader';
import { InboxMails } from './components/InboxMails/InboxMails';

export default function Home() {
  return (
    <>
      <EmailListHeader />
      <InboxMails />
    </>
  );
}
