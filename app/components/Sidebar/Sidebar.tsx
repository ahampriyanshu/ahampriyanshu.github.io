'use client';
import { memo, useContext, useState } from 'react';
import styles from './sidebar.module.scss';
import Image from 'next/image';
import { AppContext } from '@/app/AppContext';
import { primaryLinks, secondaryLinks } from '@/app/config';
import { ExpandLess, ExpandMore } from '../Icons/Icons';

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const setFilterParam = (mailType: string) => {
    dispatch({ type: 'SET_FILTER_PARAM', payload: mailType });
  };
  const isSideBarOpen = state?.isSideBarOpen || false;
  const selectedFilterParam = state?.filterParam || 'inbox';

  return (
    <div
      className={`${styles.container} ${
        isSideBarOpen ? styles.active : styles.collapsed
      }`}
    >
      <div className={styles.compose_btn}>
        <button>
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
                marginLeft: '26px',
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
              marginLeft: '26px',
            }}
            className={styles.content}
          >
            {isExpanded ? (
              <ExpandLess height={20} width={20} strokeColor={'#202124'} />
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
                    marginLeft: '26px',
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
            ))
          : null}
      </div>
    </div>
  );
}

export default memo(Sidebar);
