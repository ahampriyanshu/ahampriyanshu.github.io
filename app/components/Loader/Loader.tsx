import React from 'react';
import styles from './Loader.module.scss';
import Image from 'next/image';

export function Loader({
  setIsLoading,
}: {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loaderContent}>
        <Image
          src='/avatar.png'
          alt='User avatar'
          width={128}
          height={128}
          className={styles.logo}
          onAnimationEnd={() => {
            console.log('animation ended');
            setIsLoading(false);
          }}
        />
      </div>
    </div>
  );
}
