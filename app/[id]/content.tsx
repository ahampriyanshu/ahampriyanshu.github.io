import styles from './content.module.scss';

const contentMap = {
  linkend: 'linkend',
};

export function Content({ id }: { id: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.subject}></div>
    </div>
  );
}
