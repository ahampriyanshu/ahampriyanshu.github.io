import { EmailViewHeader } from '../components/EmailHeader/EmailViewHeader';
import { Content } from './content';

export async function generateStaticParams() {
  return [{ id: 'linkedin' }, { id: 'irony' }, { id: '3' }];
}

export default function Mail({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <>
      <EmailViewHeader />
      <Content id={id} />
    </>
  );
}
