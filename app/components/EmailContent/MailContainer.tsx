'use client';
import styles from './email-content.module.scss';
import { useRouter } from 'next/navigation';
import { SubjectContainer } from './SubjectContainer';
import { SenderContainer } from './SenderContainer';
import { EmailAttributes } from '@/types';
import { NavigationContainer } from './NavigationContainer';
import { MailContent } from './MailContent';
import { useState } from 'react';
import { emailList } from '@/app/data';

export function MailContainer({ id }: { id: string }) {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);

  const contentData = emailList.find(
    (email) => email?.id === id
  ) as EmailAttributes;

  if (!contentData) {
    router.back();
  }

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = event?.currentTarget?.scrollTop;
    setScrollPosition(scrollTop);
  };

  return (
    <div
      className={`${styles.container} ${
        scrollPosition > 0 ? styles.divider : ''
      }`}
      onScroll={handleScroll}
    >
      <SubjectContainer contentData={contentData} />
      <SenderContainer contentData={contentData} />
      <MailContent id={id} />
      <NavigationContainer />
    </div>
  );
}
