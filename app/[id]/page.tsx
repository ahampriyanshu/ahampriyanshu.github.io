import { EmailPage } from '../components/EmailPage/EmailPage';

export async function generateStaticParams() {
  return [{ id: 'linkedin' }, { id: 'drive' }];
}

export default function Mail({ params }: { params: { id: string } }) {
  const { id } = params;

  return <EmailPage id={id} />;
}
