import { MailContainer } from '../components/EmailContent/MailContainer';
import { EmailViewHeader } from '../components/EmailHeader/EmailViewHeader';
import { useEmailActions } from '../hooks/useEmailActions';

export async function generateStaticParams() {
  return [{ id: 'linkedin' }, { id: 'drive' }];
}

export default function Mail({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className='h-100 w-100'>
      <EmailViewHeader id={id} />
      <MailContainer id={id} />
    </div>
  );
}
