'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/store/store';
import {
  setAccessToken,
  setRefreshToken,
  setUsername,
} from '@/store/features/authSlice';
import { setFavoriteTracks } from '@/store/features/trackSlice';
import { getFavoriteTracks } from '@/services/tracks/tracksApi';
import { withReauth } from '@/utils/withReAuth';

//Хук для инициализации данных при авторизации
export const useInitAuth = () => {
  const dispatch = useAppDispatch();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const access = localStorage.getItem('access') || '';
    const refresh = localStorage.getItem('refresh') || '';
    const username = localStorage.getItem('username') || '';

    dispatch(setAccessToken(access));
    dispatch(setRefreshToken(refresh));
    dispatch(setUsername(username));

    // Если пользователь авторизован, загружаем избранные треки
    if (access && refresh) {
      const loadFavoriteTracks = async () => {
        try {
          const tracks = await withReauth(
            (newToken) => getFavoriteTracks(newToken),
            access,
            refresh,
            dispatch,
          );
          dispatch(setFavoriteTracks(tracks));
        } catch (error) {
          // Если не удалось загрузить избранные треки, просто игнорируем ошибку
          // (возможно, токен истек или пользователь не авторизован)
          console.error('Failed to load favorite tracks:', error);
        } finally {
          setIsInitialized(true);
        }
      };
      loadFavoriteTracks();
    } else {
      setIsInitialized(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isInitialized;
};
