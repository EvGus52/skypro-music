'use client';

import styles from './username.module.css';
import { useAppSelector, useAppDispatch } from '@/store/store';
import { useRouter } from 'next/navigation';
import { clearUser } from '@/store/features/authSlice';

export default function Username() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const authUsername = useAppSelector((state) => state.auth.username);
  const accessToken = useAppSelector((state) => state.auth.access);

  const isAuthorized = Boolean(authUsername && accessToken);

  const handleIconClick = () => {
    if (isAuthorized) {
      // Если авторизован - logout и редирект на главную
      dispatch(clearUser());
      router.push('/music/main');
    } else {
      // Если не авторизован - редирект на signin
      router.push('/auth/signin');
    }
  };

  return (
    <div className={styles.sidebar__personal}>
      <p className={styles.sidebar__personalName}>{authUsername || ' '}</p>
      <div
        className={`${styles.sidebar__icon} ${
          !isAuthorized ? styles.sidebar__iconUnauthorized : ''
        }`}
        onClick={handleIconClick}
      >
        <svg>
          <use href="/img/icon/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
  );
}
