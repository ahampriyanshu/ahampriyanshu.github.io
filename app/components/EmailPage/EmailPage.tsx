'use client';
import React, { use, useContext, useEffect } from 'react';
import { MailContainer } from '../EmailContent/MailContainer';
import { EmailViewHeader } from '../EmailHeader/EmailViewHeader';
import { useEmailActions } from '@/app/hooks/useEmailActions';

export const EmailPage = ({ id }: { id: string }) => {
  const { updateEmailArgs } = useEmailActions();

  useEffect(() => {
    updateEmailArgs(id, { isOpened: true });
    // return () => {
    //   updateEmailArgs(id, { isOpened: false });
    // };
  }, [id]);

  return (
    <div className='h-100 w-100'>
      <EmailViewHeader id={id} />
      <MailContainer id={id} />
    </div>
  );
};
