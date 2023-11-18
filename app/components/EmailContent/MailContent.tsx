import { Drive } from '@/app/content';

export const MailContent = ({ id }: { id: string }) => {
  switch (id) {
    case 'drive':
      return <Drive />;

    default:
      return <></>;
  }
};
