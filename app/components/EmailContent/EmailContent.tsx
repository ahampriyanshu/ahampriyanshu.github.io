'use client';
import { emails } from '@/app/data/inbox.data';
import styles from './email-content.module.scss';
import { useRouter } from 'next/navigation';
import { SubjectContainer } from './SubjectContainer';
import { SenderContainer } from './SenderContainer';
import { EmailAttributes } from '@/types';

export function EmailContent({ id }: { id: string }) {
  const contentData = emails.find(
    (email) => email?.id === id
  ) as EmailAttributes;
  const router = useRouter();
  if (!contentData) {
    router.back();
  }

  return (
    <div className={styles.container}>
      <SubjectContainer contentData={contentData} />
      <SenderContainer contentData={contentData} />
    </div>
  );
}
