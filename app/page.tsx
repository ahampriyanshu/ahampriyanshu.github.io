import EmailHeader from './components/EmailHeader/EmailHeader';
import EmailList from './components/EmailList/EmailList';
import { InboxSelector } from './components/InboxSelector/InboxSelector';

export default function Home() {
  return (
    <>
      <EmailHeader />
      <InboxSelector />
      <EmailList />
    </>
  );
}
