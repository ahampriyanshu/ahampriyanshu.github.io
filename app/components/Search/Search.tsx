'use client';
import { ChangeEvent, KeyboardEvent, useContext } from 'react';
import styles from './search.module.scss';
import { AppContext } from '@/app/AppContext';
import { IconBtn } from '../Icons/IconBtn';
import { Filters, SearchIcon } from '../Icons/Icons';
import { useEmailActions } from '@/app/hooks/useEmailActions';

export function Search() {
  const { state, dispatch } = useContext(AppContext);
  const { searchParam = '' } = state || {};
  const { updateSearchHistory } = useEmailActions();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch({ type: 'SET_SEARCH_PARAM', payload: value });
    if (value === '') {
      dispatch({ type: 'SET_FILTER_PARAM', payload: 'inbox' });
    }
  };

  const handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const [command, type] = searchParam.split(/(?<=in: )/);
      updateSearchHistory(searchParam);
      if (command === 'in: ') {
        dispatch({ type: 'SET_FILTER_PARAM', payload: type });
      } else {
        dispatch({ type: 'SET_FILTER_PARAM', payload: 'search' });
      }
    }
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
        onKeyDown={handleSearchKeyDown}
      />
    </div>
  );
}
