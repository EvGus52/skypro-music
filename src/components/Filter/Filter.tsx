'use client';

import { useState, useMemo, useCallback } from 'react';
import styles from './filter.module.css';
import { getUniqueValuesByKey } from '@/utils/helper';
import { TrackType } from '@/sharedTypes/sharedTypes';
import FilterItem from '../FilterItem/FilterItem';
import { useAppDispatch, useAppSelector } from '@/store/store';
import {
  setFilterAuthors,
  setFilterGenres,
  setFilterYears,
} from '@/store/features/trackSlice';

type FilterProps = {
  tracks: TrackType[];
};

export default function Filter({ tracks }: FilterProps) {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.tracks);
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const uniqueAuthors = useMemo(
    () => getUniqueValuesByKey(tracks, 'author'),
    [tracks],
  );

  const uniqueGenres = useMemo(
    () => getUniqueValuesByKey(tracks, 'genre'),
    [tracks],
  );

  const yearSortOptions = ['Сначала новые', 'Сначала старые', 'По умолчанию'];

  const handleFilterToggle = useCallback((filterType: string) => {
    setOpenFilter((prev) => (prev === filterType ? null : filterType));
  }, []);

  const handleItemClick = useCallback(
    (filterType: string, item: string) => {
      if (filterType === 'author') {
        dispatch(setFilterAuthors(item));
      } else if (filterType === 'genre') {
        dispatch(setFilterGenres(item));
      } else if (filterType === 'year') {
        dispatch(setFilterYears(item));
      }
    },
    [dispatch],
  );

  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>

      <div className={styles.filter__wrapper}>
        <FilterItem
          title="исполнителю"
          isOpen={openFilter === 'author'}
          items={uniqueAuthors}
          onToggle={() => handleFilterToggle('author')}
          activeItems={filters.authors}
          filterType="author"
          onItemClick={handleItemClick}
        />
        <FilterItem
          title="году выпуска"
          isOpen={openFilter === 'year'}
          items={yearSortOptions}
          onToggle={() => handleFilterToggle('year')}
          activeItems={filters.years !== 'По умолчанию' ? [filters.years] : []}
          filterType="year"
          onItemClick={handleItemClick}
        />
        <FilterItem
          title="жанру"
          isOpen={openFilter === 'genre'}
          items={uniqueGenres}
          onToggle={() => handleFilterToggle('genre')}
          activeItems={filters.genres}
          filterType="genre"
          onItemClick={handleItemClick}
        />
      </div>
    </div>
  );
}
