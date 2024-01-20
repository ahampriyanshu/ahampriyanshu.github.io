'use client';
import { ChangeEvent, useContext } from 'react';
import styles from './search.module.scss';
import { AppContext } from '@/app/AppContext';
import { IconBtn } from '../Icons/IconBtn';
import { Filters, SearchIcon } from '../Icons/Icons';

export function Search() {
  const { state, dispatch } = useContext(AppContext);
  const { searchParam = '' } = state || {};

  const setFilterParam = (mailType: string) => {
    dispatch({ type: 'SET_FILTER_PARAM', payload: mailType });
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_SEARCH_PARAM', payload: e.target.value });
  };

  return (
    <div className={styles.search_bar_container}>
      <IconBtn
        style={{
          position: 'absolute',
          left: 0,
          top: 6,
          padding: 6,
        }}
      >
        <SearchIcon />
      </IconBtn>
      <IconBtn
        disabled
        style={{
          position: 'absolute',
          right: '-96px',
          top: 6,
          padding: 6,
        }}
      >
        <Filters />
      </IconBtn>

      <input
        type='text'
        className={styles.search_input}
        placeholder='Search mail'
        value={searchParam}
        onChange={handleSearchChange}
      />
    </div>
  );
}
