import { MailContainer } from '../components/MailView/MailContainer';
import { EmailViewHeader } from '../components/EmailHeader/EmailViewHeader';

export async function generateStaticParams() {
  return [{ id: 'linkedin' }, { id: 'drive' }];
}

export default function Mail({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <>
      <EmailViewHeader />
      <MailContainer id={id} />
    </>
  );
}
