import React, { useEffect } from 'react';
import styles from './Loader.module.scss';
import Image from 'next/image';

export function Loader({
  setIsLoading,
}: {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [setIsLoading]);

  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loaderContent}>
        <Image
          src='/avatar.png'
          alt='User avatar'
          width={128}
          height={128}
          className={styles.logo}
        />
      </div>
    </div>
  );
}
