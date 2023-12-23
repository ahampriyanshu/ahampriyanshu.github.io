import { EmailListHeader } from './components/EmailHeader/EmailListHeader';
import Footer from './components/Footer/Footer';
import { InboxMails } from './components/InboxMails/InboxMails';

export default function Home() {
  return (
    <div className='flex flex-col justify-between h-100'>
      <EmailListHeader />
      <InboxMails />
      <Footer />
    </div>
  );
}
