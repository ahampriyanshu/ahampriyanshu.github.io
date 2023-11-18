import Image from 'next/image';
import { Forward, Reply, Return } from '../Icons/Icons';
import styles from './navigation-container.module.scss';

export const NavigationContainer = () => {
  return (
    <div>
      <div className={styles.container}>
        <button>
          <Reply strokeColor='#444746' height={16} width={16} /> Reply
        </button>

        <button>
          <Forward strokeColor='#444746' width={16} height={16} /> Forward
        </button>
      </div>
    </div>
  );
};
