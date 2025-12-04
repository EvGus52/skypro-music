import styles from './centerblock.module.css';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import Track from '../Track/Track';
import { CenterBlockProps } from '@/sharedTypes/sharedTypes';
import classNames from 'classnames';
import { data } from '@/data';

export default function Centerblock({
  errorRes,
  isLoading,
  tracks,
  title,
}: CenterBlockProps) {
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
          {errorRes
            ? errorRes
            : isLoading
              ? 'Загрузка'
              : tracks.map((track) => (
                  <Track key={track._id} track={track} tracks={tracks} />
                ))}
        </div>
      </div>
    </div>
  );
}
