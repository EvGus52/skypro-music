import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './track.module.css';

export default function TrackSkeletonItem() {
  return (
    <div className={styles.playlist__item}>
      <div className={styles.playlist__track}>
        <div className={styles.track__title}>
          <div className={styles.track__titleImage}>
            <Skeleton
              className={styles.skeleton}
              baseColor="#313131"
              highlightColor="#4e4e4e"
            />
          </div>
          <div className={styles['track__title-text']}>
            <Skeleton
              className={styles.skeleton}
              baseColor="#313131"
              highlightColor="#4e4e4e"
            />
          </div>
        </div>
        <div className={styles.track__author}>
          <Skeleton
            className={styles.skeleton}
            baseColor="#313131"
            highlightColor="#4e4e4e"
          />
        </div>
        <div className={styles.track__album}>
          <Skeleton
            className={styles.skeleton}
            baseColor="#313131"
            highlightColor="#4e4e4e"
          />
        </div>
        <div className={styles.track__time}>
          <Skeleton
            className={styles.skeleton}
            baseColor="#313131"
            highlightColor="#4e4e4e"
          />
        </div>
      </div>
    </div>
  );
}

