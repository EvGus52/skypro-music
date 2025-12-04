'use client';
import styles from './bar.module.css';
import Link from 'next/link';
import cn from 'classnames';
import { useAppSelector, useAppDispatch } from '@/store/store';
import { useRef, useEffect, useState } from 'react';
import { getTimePanel } from '@/utils/helper';
import {
  setIsPlay,
  setNextTrack,
  setPrevTrack,
  toggleShuffle,
} from '@/store/features/trackSlice';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
export default function Bar() {
  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
  const isPlay = useAppSelector((state) => state.tracks.isPlay);
  const isShaffle = useAppSelector((state) => state.tracks.isShaffle);
  const dispatch = useAppDispatch();
  const [isLoop, setIsLoop] = useState(false);
  const [isLoadedTrack, setIsLoadedTrack] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [timePanel, setTimePanel] = useState('0:00 / 0:00');
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (currentTrack && isPlay && audioRef.current && isLoadedTrack) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Игнорируем AbortError - это нормально при переключении треков
          if (error.name !== 'AbortError') {
            console.error('Ошибка воспроизведения:', error);
          }
        });
      }
    }
  }, [currentTrack, isPlay, isLoadedTrack]);

  useEffect(() => {
    setIsLoadedTrack(false);
  }, [currentTrack]);

  useEffect(() => {
    setIsLoadedTrack(false);
  }, [currentTrack]);

  if (!currentTrack) return <></>;

  const playTrack = () => {
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            dispatch(setIsPlay(true));
          })
          .catch((error) => {
            // Игнорируем AbortError - это нормально при переключении треков
            if (error.name !== 'AbortError') {
              console.error('Ошибка воспроизведения:', error);
            }
          });
      } else {
      dispatch(setIsPlay(true));
      }
    }
  };

  const pauseTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      dispatch(setIsPlay(false));
    }
  };

  const togglePlayPause = () => {
    if (isPlay) {
      pauseTrack();
    } else {
      playTrack();
    }
  };

  const onToggleLoop = () => {
    setIsLoop(!isLoop);
  };

  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    const { currentTime, duration: audioDuration } = audioRef.current;
    const panel = getTimePanel(
      currentTime,
      Number.isFinite(audioDuration) ? audioDuration : undefined,
    );
    if (panel) {
      setTimePanel(panel);
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      setDuration(
        Number.isFinite(audioRef.current.duration)
          ? audioRef.current.duration
          : 0,
      );
      const panel = getTimePanel(
        audioRef.current.currentTime,
        Number.isFinite(audioRef.current.duration)
          ? audioRef.current.duration
          : undefined,
      );
      if (panel) {
        setTimePanel(panel);
      }
      setIsLoadedTrack(true);
      
      // Автоматически запускаем воспроизведение, если флаг воспроизведения активен
      if (isPlay) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            // Игнорируем AbortError - это нормально при переключении треков
            if (error.name !== 'AbortError') {
              console.error('Ошибка воспроизведения:', error);
            }
          });
        }
      }
    }
  };

  const onChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextVolume = Number(e.target.value);
    setVolume(nextVolume);
    if (audioRef.current) {
      audioRef.current.volume = nextVolume;
    }
  };

  const onChangeProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const inputTime = Number(e.target.value);
      audioRef.current.currentTime = inputTime;
    }
  };
  const onNextTrack = () => {
    dispatch(setNextTrack());
  };

  const onPrevTrack = () => {
    dispatch(setPrevTrack());
  };
  const onToggleShuffle = () => {
    dispatch(toggleShuffle());
  };

  return (
    <div className={styles.bar}>
      <audio
        ref={audioRef}
        src={currentTrack?.track_file}
        loop={isLoop}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onNextTrack}
      ></audio>
      <div className={styles.bar__content}>
        <div className={styles.bar__progressWrapper}>
          <div className={styles.bar__timePanel}>
            {isLoadedTrack ? timePanel : 'Загрузка...'}
          </div>
          <ProgressBar
            max={duration}
            value={audioRef.current?.currentTime || 0}
            step={0.1}
            onChange={onChangeProgress}
            disabled={!isLoadedTrack}

          />
        </div>
        <div className={styles.bar__playerBlock}>
          <div className={styles.bar__player}>
            <div className={styles.player__controls}>
              <div
                onClick={onPrevTrack}
                className={cn(styles.player__btnPrev, styles.btn)}
              >
                <svg className={styles.player__btnPrevSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                </svg>
              </div>
              <div
                className={cn(styles.player__btnPlay, styles.btn)}
                onClick={togglePlayPause}
              >
                <svg className={styles.player__btnPlaySvg}>
                  <use
                    xlinkHref={`/img/icon/sprite.svg#icon-${isPlay ? 'pause' : 'play'}`}
                  ></use>
                </svg>
              </div>
              <div
                onClick={onNextTrack}
                className={cn(styles.player__btnNext, styles.btn)}
              >
                <svg className={styles.player__btnNextSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                </svg>
              </div>
              <div
                onClick={onToggleLoop}
                className={cn(styles.player__btnRepeat, styles.btnIcon)}
              >
                <svg
                  className={cn(styles.player__btnRepeatSvg, {
                    [styles.player__btnRepeatSvgActive]: isLoop,
                  })}
                >
                  <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                </svg>
              </div>
              <div
                onClick={onToggleShuffle}
                className={cn(styles.player__btnShuffle, styles.btnIcon)}
              >
                <svg
                  className={cn(styles.player__btnShuffleSvg, {
                    [styles.player__btnShuffleSvgActive]: isShaffle,
                  })}
                >
                  <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                </svg>
              </div>
            </div>
            <div className={styles.player__trackPlay}>
              <div className={styles.trackPlay__contain}>
                <div className={styles.trackPlay__image}>
                  <svg className={styles.trackPlay__svg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className={styles.trackPlay__author}>
                  <Link className={styles.trackPlay__authorLink} href="">
                    {currentTrack.name}
                  </Link>
                </div>
                <div className={styles.trackPlay__album}>
                  <Link className={styles.trackPlay__albumLink} href="">
                    {currentTrack.author}
                  </Link>
                </div>
              </div>

              <div className={styles.trackPlay__dislike}>
                <div className={cn(styles.player__btnShuffle, styles.btnIcon)}>
                  <svg className={styles.trackPlay__likeSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                  </svg>
                </div>
                <div className={cn(styles.trackPlay__dislike, styles.btnIcon)}>
                  <svg className={styles.trackPlay__dislikeSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bar__volumeBlock}>
            <div className={styles.volume__content}>
              <div className={styles.volume__image}>
                <svg className={styles.volume__svg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                </svg>
              </div>
              <div className={cn(styles.volume__progress, styles.btn)}>
                <input
                  className={cn(styles.volume__progressLine, styles.btn)}
                  type="range"
                  name="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={onChangeTime}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
