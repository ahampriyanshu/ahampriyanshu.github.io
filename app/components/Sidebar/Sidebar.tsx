'use client';
import { memo, useContext, useState } from 'react';
import styles from './sidebar.module.scss';
import Image from 'next/image';
import { AppContext } from '@/app/AppContext';
import { primaryLinks, secondaryLinks } from '@/app/config';
import {
  Alert,
  AlertFilled,
  Clock,
  ClockFilled,
  Draft,
  DraftFilled,
  ExpandLess,
  ExpandMore,
  Fallback,
  Inbox,
  InboxFilled,
  Send,
  SendFilled,
  Star,
  StarFilled,
  Trash,
  TrashFilled,
} from '../Icons/Icons';
import { IconMap } from '@/types';
import { useRouter } from 'next/navigation';

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  const router = useRouter();
  const isSideBarOpen = state?.isSideBarOpen || false;
  const selectedFilterParam = state?.filterParam || 'inbox';

  const setFilterParam = (mailType: string) => {
    router.push('/');
    dispatch({ type: 'SET_FILTER_PARAM', payload: mailType });
  };

  const sendNewMail = () => {
    window.location.href =
      'mailto:ahampriyanshu@gmail.com?subject=Hi%20priyanshu';
  };

  const iconMap: IconMap = {
    inbox: {
      outlined: <Inbox strokeColor='#202124' height={20} width={20} />,
      filled: <InboxFilled strokeColor='#202124' height={20} width={20} />,
    },
    starred: {
      outlined: <Star strokeColor='#202124' height={20} width={20} />,
      filled: <StarFilled strokeColor='#202124' height={20} width={20} />,
    },
    snoozed: {
      outlined: <Clock strokeColor='#202124' height={20} width={20} />,
      filled: <ClockFilled strokeColor='#202124' height={20} width={20} />,
    },
    send: {
      outlined: <Send strokeColor='#202124' height={20} width={20} />,
      filled: <SendFilled strokeColor='#202124' height={20} width={20} />,
    },
    draft: {
      outlined: <Draft strokeColor='#202124' height={20} width={20} />,
      filled: <DraftFilled strokeColor='#202124' height={20} width={20} />,
    },
    spam: {
      outlined: <Alert strokeColor='#202124' height={20} width={20} />,
      filled: <AlertFilled strokeColor='#202124' height={20} width={20} />,
    },
    bin: {
      outlined: <Trash strokeColor='#202124' height={20} width={20} />,
      filled: <TrashFilled strokeColor='#202124' height={20} width={20} />,
    },
  };

  return (
    <div
      className={`${styles.container} ${
        isSideBarOpen || isHovered ? styles.active : styles.collapsed
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div
        className={`${styles.compose_btn} ${
          isSideBarOpen || isHovered ? styles.active : styles.collapsed
        }`}
      >
        <button onClick={sendNewMail}>
          <div>
            <Image
              src='/icons/edit.png'
              alt='edit icon'
              width={24}
              height={24}
            />
          </div>
          <span>Compose</span>
        </button>
      </div>

      <div className={styles.links}>
        {primaryLinks.map((link, index) => (
          <div
            key={index}
            className={`${styles.link} ${
              link.type === selectedFilterParam ? styles.active : ''
            }
                ${
                  link.type !== 'inbox' && link.type !== 'draft'
                    ? styles.others
                    : ''
                } `}
            onClick={() => setFilterParam(link.type)}
          >
            <div className={styles.icon}>
              {iconMap?.[link.type]?.[
                link.type === selectedFilterParam ? 'filled' : 'outlined'
              ] || <Fallback width={24} height={24} />}
            </div>

            <div className={styles.text}>
              <div className={styles.title}>{link.type}</div>
              <div className={styles.count}>{link.count}</div>
            </div>
          </div>
        ))}
        {/* {primaryLinks.map((link, index) => (
          <button
            key={index}
            className={`${styles.link} ${
              link.type === selectedFilterParam ? styles.active : ''
            }
            ${
              link.type !== 'inbox' && link.type !== 'draft'
                ? styles.others
                : ''
            } `}
            onClick={() => setFilterParam(link.type)}
          >
            <div
              style={{
                marginLeft: '22px',
              }}
              className={styles.content}
            >
              <Image
                src={`/icons/${
                  link.type === selectedFilterParam
                    ? link.type + '-active'
                    : link.type
                }.png`}
                alt={`${link.type} icon`}
                width={20}
                height={20}
              />
              <div className={styles.title}>{link.type}</div>
            </div>
            <div
              style={{
                marginRight: '16px',
              }}
              className={styles.count}
            >
              {link.count}
            </div>
          </button>
        ))}

        <button
          className={`${styles.link} ${styles.others}`}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <div
            style={{
              marginLeft: '22px',
            }}
            className={styles.content}
          >
            {isExpanded ? (
              <ExpandLess height={20} width={20} />
            ) : (
              <ExpandMore width={20} height={20} />
            )}
            <div className={styles.title}>{isExpanded ? 'Less' : 'More'}</div>
          </div>
        </button>

        {isExpanded
          ? secondaryLinks.map((link, index) => (
              <button
                key={index}
                className={`${styles.link} ${
                  link.type === selectedFilterParam ? styles.active : ''
                }
                ${
                  link.type !== 'inbox' && link.type !== 'draft'
                    ? styles.others
                    : ''
                } `}
                onClick={() => setFilterParam(link.type)}
              >
                <div
                  style={{
                    marginLeft: '22px',
                  }}
                  className={styles.content}
                >
                  {iconMap?.[link.type]?.[
                    link.type === selectedFilterParam ? 'filled' : 'outlined'
                  ] || <Fallback width={24} height={24} />}
                  <div className={styles.title}>{link.type}</div>
                </div>
                <div
                  style={{
                    marginRight: '16px',
                  }}
                  className={styles.count}
                >
                  {link.count}
                </div>
              </button>
            ))
          : null} */}
      </div>
    </div>
  );
}

export default memo(Sidebar);
