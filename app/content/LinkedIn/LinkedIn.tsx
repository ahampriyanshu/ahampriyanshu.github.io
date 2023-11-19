import Image from 'next/image';
import styles from './linkedin.module.scss';
import { FAIR_USAGE } from '@/app/constants/msg.constants';
import { openInNewTab } from '@/app/utils/common';
import { USER } from '@/app/config/user.config';

export const LinkedIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.banner}>
            <Image
              src='/content/li_banner.png'
              alt='linkedin banner'
              width={92}
              height={30}
            />
            <Image
              src='/content/profile.png'
              alt='linkedin profile'
              width={32}
              height={32}
              style={{
                borderRadius: '50%',
              }}
            />
          </div>
          <div className={styles.profile}>
            <Image
              src='/content/li_profile.png'
              alt='linkedin profile'
              width={64}
              height={64}
              style={{
                borderRadius: '50%',
              }}
            />
            <h3>Priyanshu Tiwari</h3>
            <h4>Software Engineer @ HackerRank </h4>
          </div>

          <hr />

          <div className={styles.btns}>
            <button onClick={() => openInNewTab(USER.LINKEDIN)}>Accept</button>
            <button onClick={() => openInNewTab(USER.LINKEDIN)}>
              View Profile
            </button>
          </div>

          <div className={styles.header}>More people you may know</div>
          <div>
            <div className={styles.recommended}>
              <div className={styles.info}>
                <div className={styles.img}>
                  <Image
                    src='/content/profile.png'
                    alt='linkedin profile'
                    width={48}
                    height={48}
                    style={{
                      borderRadius: '50%',
                    }}
                  />
                </div>
                <div className={styles.text}>
                  <p>Lauri Törni</p>
                  <span>
                    World War Veteran | Global expert in tactical oopsies |
                    {`"Fourth time's the charm"`}
                  </span>
                </div>
              </div>
              <button
                onClick={() =>
                  openInNewTab('https://en.wikipedia.org/wiki/Lauri_T%C3%B6rni')
                }
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <p>Never miss an update with the LinkedIn app</p>
          <div className={styles.imgs}>
            <Image
              src='/content/li_app.png'
              alt='app store link'
              width={120}
              height={40}
              style={{
                marginInlineEnd: '16px',
              }}
            />

            <Image
              src='/content/li_play.png'
              alt='play store link'
              width={120}
              height={40}
            />
          </div>
        </div>
        <div className={styles.credits}>{FAIR_USAGE}</div>
      </div>
    </div>
  );
};
