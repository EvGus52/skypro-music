'use client';

import { useState } from 'react';
import styles from './filter.module.css';
import { getUniqueValuesByKey } from '@/utils/helper';
import { TrackType } from '@/sharedTypes/sharedTypes';
import FilterItem from '../FilterItem/FilterItem';

type FilterProps = {
  tracks: TrackType[];
};

export default function Filter({ tracks }: FilterProps) {
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [activeItems, setActiveItems] = useState<{
    author: string[];
    year: string[];
    genre: string[];
  }>({
    author: [],
    year: [],
    genre: [],
  });

  const uniqueAuthors = getUniqueValuesByKey(tracks, 'author');
  const uniqueGenres = getUniqueValuesByKey(tracks, 'genre');

  // Опции сортировки по году выпуска
  const yearSortOptions = ['Сначала новые', 'Сначала старые', 'По умолчанию'];

  const handleFilterToggle = (filterType: string) => {
    if (openFilter === filterType) {
      setOpenFilter(null);
    } else {
      setOpenFilter(filterType);
    }
  };

  const handleItemClick = (filterType: string, item: string) => {
    setActiveItems((prev) => {
      const currentItems = prev[filterType as keyof typeof prev];
      const isActive = currentItems.includes(item);

      if (isActive) {
        return {
          ...prev,
          [filterType]: currentItems.filter((i) => i !== item),
        };
      } else {
        return {
          ...prev,
          [filterType]: [...currentItems, item],
        };
      }
    });
  };

  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>

      <div className={styles.filter__wrapper}>
        <FilterItem
          title="исполнителю"
          isOpen={openFilter === 'author'}
          items={uniqueAuthors}
          onToggle={() => handleFilterToggle('author')}
          activeItems={activeItems.author}
          filterType="author"
          onItemClick={handleItemClick}
        />
        <FilterItem
          title="году выпуска"
          isOpen={openFilter === 'year'}
          items={yearSortOptions}
          onToggle={() => handleFilterToggle('year')}
          activeItems={activeItems.year}
          filterType="year"
          onItemClick={handleItemClick}
        />
        <FilterItem
          title="жанру"
          isOpen={openFilter === 'genre'}
          items={uniqueGenres}
          onToggle={() => handleFilterToggle('genre')}
          activeItems={activeItems.genre}
          filterType="genre"
          onItemClick={handleItemClick}
        />
      </div>
    </div>
  );
}
