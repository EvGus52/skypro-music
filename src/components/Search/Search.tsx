'use client';
import styles from './search.module.css';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setSearchQuery } from '@/store/features/trackSlice';

export default function Search() {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.tracks);

  const onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSearchQuery(value));
  };

  return (
    <div className={styles.centerblock__search}>
      <svg className={styles.search__svg}>
        <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
        value={filters.searchQuery}
        onChange={onSearchInput}
      />
    </div>
  );
}
