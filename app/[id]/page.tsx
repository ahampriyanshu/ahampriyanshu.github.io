import { EmailContent } from '../components/EmailContent/EmailContent';
import { EmailViewHeader } from '../components/EmailHeader/EmailViewHeader';

export async function generateStaticParams() {
  return [{ id: 'linkedin' }];
}

export default function Mail({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <>
      <EmailViewHeader />
      <EmailContent id={id} />
    </>
  );
}
