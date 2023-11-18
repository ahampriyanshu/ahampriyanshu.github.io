'use client';
import styles from './email-content.module.scss';
import { Drive } from '@/app/content';

export const MailContent = ({ id }: { id: string }) => {
  let componentToRender;

  switch (id) {
    case 'drive':
      componentToRender = <Drive />;
      break;

    default:
      componentToRender = <Drive />;
  }

  return <div>{componentToRender}</div>;
};
