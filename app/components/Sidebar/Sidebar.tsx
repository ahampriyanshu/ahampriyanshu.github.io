import styles from './sidebar.module.scss';

export function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.compose_btn}>
        <button>Compose</button>
      </div>
    </div>
  );
}
