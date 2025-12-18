'use client';

import styles from './track.module.css';
import Link from 'next/link';
import cn from 'classnames';
import { formatTime } from '@/utils/helper';
import { TrackType } from '@/sharedTypes/sharedTypes';
import { useAppDispatch, useAppSelector } from '@/store/store';
import {
  setCurrentPlaylist,
  setCurrentTrack,
  setIsPlay,
} from '@/store/features/trackSlice';
import { useLikeTrack } from '@/hooks/useLikeTracks';
import { useCallback, useMemo } from 'react';
import TrackSkeletonItem from './TrackSkeletonItem';

type TrackProps = {
  tracks: TrackType[];
  playlist: TrackType[];
  isLoading?: boolean;
  skeletonCount?: number;
};

export default function Track({
  tracks,
  playlist,
  isLoading = false,
  skeletonCount = 10,
}: TrackProps) {
  const dispatch = useAppDispatch();
  const { isPlay, currentTrack } = useAppSelector((state) => state.tracks);

  const currentPlaylist = useMemo(() => playlist || tracks, [playlist, tracks]);

  const onClickTrack = useCallback(
    (track: TrackType) => {
      dispatch(setCurrentTrack(track));
      dispatch(setCurrentPlaylist(currentPlaylist));
      dispatch(setIsPlay(true));
    },
    [dispatch, currentPlaylist],
  );

  if (isLoading) {
    return (
      <div className={styles.content__playlist}>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <TrackSkeletonItem key={`skeleton-${index}`} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.content__playlist}>
      {tracks.map((track, index) => (
        <TrackItem
          key={track._id ? `track-${track._id}-${index}` : `track-${index}`}
          track={track}
          onClickTrack={onClickTrack}
          isPlay={isPlay}
          currentTrack={currentTrack}
        />
      ))}
    </div>
  );
}

type TrackItemProps = {
  track: TrackType;
  onClickTrack: (track: TrackType) => void;
  isPlay: boolean;
  currentTrack: TrackType | null;
};

function TrackItem({
  track,
  onClickTrack,
  isPlay,
  currentTrack,
}: TrackItemProps) {
  const { toggleLike, isLike } = useLikeTrack(track);
  const { access } = useAppSelector((state) => state.auth);

  const isAuthorized = !!access;
  const iconName = isAuthorized ? 'icon-like' : 'icon-dislike';
  const isLiked = isAuthorized && isLike;

  return (
    <div className={styles.playlist__item} onClick={() => onClickTrack(track)}>
      <div className={styles.playlist__track}>
        <div className={styles.track__title}>
          <div className={styles.track__titleImage}>
            {currentTrack?._id === track._id ? (
              <div
                className={cn(
                  styles.track__currentDot,
                  isPlay ? styles.track__currentDotPulsing : '',
                )}
              ></div>
            ) : (
              <svg className={styles.track__titleSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
              </svg>
            )}
          </div>
          <div className={styles['track__title-text']}>
            <Link className={styles.track__titleLink} href="">
              {track.name} <span className={styles.track__titleSpan}></span>
            </Link>
          </div>
        </div>
        <div className={styles.track__author}>
          <Link className={styles.track__authorLink} href="">
            {track.author}
          </Link>
        </div>
        <div className={styles.track__album}>
          <Link className={styles.track__albumLink} href="">
            {track.album}
          </Link>
        </div>
        <div className={styles.track__time}>
          <svg
            className={cn(
              styles.track__timeSvg,
              isLiked && styles.track__timeSvgActive,
            )}
            onClick={(e) => {
              e.stopPropagation();
              toggleLike();
            }}
          >
            <use xlinkHref={`/img/icon/sprite.svg#${iconName}`}></use>
          </svg>
          <span className={styles.track__timeText}>
            {formatTime(track.duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
}
