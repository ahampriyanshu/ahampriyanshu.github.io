'use client';
import { IconBtn } from '../components/Icons/IconBtn';
import { OpenInNewTab, Print, ViewMore } from '../components/Icons/Icons';
import { emails } from '../data/inbox.data';
import styles from './content.module.scss';
import { useRouter } from 'next/navigation';
const contentMap = {
  linkend: 'linkend',
};

export function Content({ id }: { id: string }) {
  const contentData = emails.find((email) => email?.id === id);
  const router = useRouter();
  if (!contentData) {
    router.back();
  }

  return (
    <div className={styles.container}>
      <div className={styles.subject}>
        <div className={styles.text_content}>
          <div className={styles.title}>{contentData?.subject}</div>
          <span className={styles.tag}>{contentData?.tag}</span>
        </div>
        <div className={styles.icon_content}>
          <IconBtn padding='8px'>
            <Print height={20} width={20} />
          </IconBtn>
          <IconBtn padding='8px'>
            <OpenInNewTab height={20} width={20} />
          </IconBtn>
        </div>
      </div>
    </div>
  );
}
