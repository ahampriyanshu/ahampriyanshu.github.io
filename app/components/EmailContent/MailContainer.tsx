'use client';
import { defaultData } from '@/app/data/inbox.data';
import styles from './email-content.module.scss';
import { useRouter } from 'next/navigation';
import { SubjectContainer } from './SubjectContainer';
import { SenderContainer } from './SenderContainer';
import { EmailAttributes } from '@/types';
import { NavigationContainer } from './NavigationContainer';
import { MailContent } from './MailContent';
import { useState } from 'react';

export function MailContainer({ id }: { id: string }) {
  const contentData = defaultData.find(
    (email) => email?.id === id
  ) as EmailAttributes;
  const router = useRouter();
  if (!contentData) {
    router.back();
  }
  const [scrollPosition, setScrollPosition] = useState(0);

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
