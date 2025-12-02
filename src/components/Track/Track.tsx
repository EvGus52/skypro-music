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

type TrackProps = {
  tracks: TrackType[];
  playlist?: TrackType[];
};

export default function Track({ tracks, playlist }: TrackProps) {
  const dispatch = useAppDispatch();
  const isPlay = useAppSelector((state) => state.tracks.isPlay);
  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);

  const onClickTrack = (track: TrackType) => {
    dispatch(setCurrentTrack(track));
    dispatch(setCurrentPlaylist(playlist || tracks));
    dispatch(setIsPlay(true));
  };

  return (
    <div className={styles.content__playlist}>
      {tracks.map((track, index) => (
        <div
          key={track._id ? `track-${track._id}-${index}` : `track-${index}`}
          className={styles.playlist__item}
          onClick={() => onClickTrack(track)}
        >
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
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>
                {formatTime(track.duration_in_seconds)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
