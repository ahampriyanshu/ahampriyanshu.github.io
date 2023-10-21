import styles from './header.module.scss';
import { HamburgerMenu } from '@/app/icons';
export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <button className='btn-icon'>
          <HamburgerMenu />
        </button>
        <h1>Priyanshu</h1>
      </div>

      <div className={styles.search_bar_container}></div>
    </div>
  );
}
