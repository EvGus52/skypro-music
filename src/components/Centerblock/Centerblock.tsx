'use client';

import styles from './centerblock.module.css';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import Track from '../Track/Track';
import { CenterBlockProps } from '@/sharedTypes/sharedTypes';
import classNames from 'classnames';
import { data } from '@/data';
import { useAppSelector } from '@/store/store';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

export default function Centerblock({
  errorRes,
  isLoading,
  tracks,
  title,
}: CenterBlockProps) {
  const { filteredTracks, filters, pagePlaylist } = useAppSelector(
    (state) => state.tracks,
  );
  const prevErrorRef = useRef<string | null>(null);

  useEffect(() => {
    if (errorRes && errorRes !== prevErrorRef.current) {
      toast.error(errorRes);
      prevErrorRef.current = errorRes;
    }
  }, [errorRes]);

  const hasActiveFilters =
    filters.authors.length > 0 ||
    filters.genres.length > 0 ||
    filters.years !== 'По умолчанию' ||
    filters.searchQuery.length >= 3;
  const displayTracks = hasActiveFilters ? filteredTracks : tracks;
  const hasNoResults =
    displayTracks.length === 0 && pagePlaylist.length > 0 && hasActiveFilters;
  return (
    <div className={styles.centerblock}>
      <Search />
      <Filter tracks={isLoading ? data : tracks} />
      <h2 className={styles.centerblock__h2}>{title}</h2>
      <div className={styles.centerblock__content}>
        <div className={styles.content__title}>
          <div className={classNames(styles.playlistTitle__col, styles.col01)}>
            Трек
          </div>
          <div className={classNames(styles.playlistTitle__col, styles.col02)}>
            Исполнитель
          </div>
          <div className={classNames(styles.playlistTitle__col, styles.col03)}>
            Альбом
          </div>
          <div className={classNames(styles.playlistTitle__col, styles.col04)}>
            <svg className={styles.playlistTitle__svg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className={styles.content__playlist}>
          {hasNoResults ? (
            <span className={styles.content__message}>
              Нет подходящих треков
            </span>
          ) : displayTracks.length === 0 && !isLoading ? (
            <span className={styles.content__message}>Нет треков</span>
          ) : (
            <Track
              tracks={displayTracks}
              playlist={displayTracks}
              isLoading={isLoading}
              skeletonCount={10}
            />
          )}
        </div>
      </div>
    </div>
  );
}
