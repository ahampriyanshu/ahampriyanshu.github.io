'use client';
import React, { useContext, useEffect } from 'react';
import { MailContainer } from '../EmailContent/MailContainer';
import { EmailViewHeader } from '../EmailHeader/EmailViewHeader';
import { useEmailActions } from '@/app/hooks/useEmailActions';
import { AppContext } from '@/app/AppContext';
import { useRouter } from 'next/navigation';

export const EmailPage = ({ id }: { id: string }) => {
  const router = useRouter();
  const { updateEmailArgs } = useEmailActions();
  const { state } = useContext(AppContext);

  useEffect(() => {
    const emailData = state.emails || [];
    const emailDatum = emailData.find((email) => email?.id === id);

    if (!emailDatum) {
      router.back();
    }

    if (!emailDatum?.isOpened) {
      updateEmailArgs(id, { isOpened: true });
    }
  }, [updateEmailArgs, id]);

  return (
    <div className='h-100 w-100'>
      <EmailViewHeader id={id} />
      <MailContainer id={id} />
    </div>
  );
};
