import { Drive, LinkedIn } from '@/app/content';

export const MailContent = ({ id }: { id: string }) => {
  switch (id) {
    case 'drive':
      return <Drive />;
    case 'linkedin':
      return <LinkedIn />;

    default:
      return <></>;
  }
};
