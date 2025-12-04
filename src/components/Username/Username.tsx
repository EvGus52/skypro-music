'use client';

import styles from './username.module.css';
import { useAppSelector } from '@/store/store';

export default function Username() {
  const authUsername = useAppSelector((state) => state.auth.username);
  return (
    <div className={styles.sidebar__personal}>
      <p className={styles.sidebar__personalName}>{authUsername || 'Юзер'}</p>
      <div className={styles.sidebar__icon}>
        <svg>
          <use xlinkHref="/img/icon/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
  );
}
