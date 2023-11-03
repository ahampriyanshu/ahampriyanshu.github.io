import EmailHeader from './components/EmailHeader/EmailHeader';
import EmailList from './components/EmailList/EmailList';
import { InboxMails } from './components/InboxMails/InboxMails';

export default function Home() {
  return (
    <>
      <EmailHeader />
      <InboxMails />
      <EmailList />
    </>
  );
}
