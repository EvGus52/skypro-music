'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/store/store';
import Centerblock from '@/components/Centerblock/Centerblock';
import { getFavoriteTracks } from '@/services/tracks/tracksApi';
import { setFavoriteTracks } from '@/store/features/trackSlice';
import { withReauth } from '@/utils/withReAuth';
import { AxiosError } from 'axios';

export default function FavoritesPage() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { access, refresh } = useAppSelector((state) => state.auth);
  const { favoriteTracks } = useAppSelector((state) => state.tracks);
  const [isLoading, setIsLoading] = useState(true);
  const [errorRes, setErrorRes] = useState<string | null>(null);
  const isNavigatingAway = useRef(false);

  useEffect(() => {
    // Если мы уже покинули страницу, не делаем редирект
    if (isNavigatingAway.current) {
      return;
    }

    // Проверка авторизации
    if (!access) {
      // Редирект на signin только если мы все еще на странице favorites
      if (pathname === '/music/favorites') {
        router.push('/auth/signin');
      }
      return;
    }

    // Загрузка избранных треков только если есть авторизация
    setIsLoading(true);
    setErrorRes(null);

    const loadTracks = async () => {
      try {
        const tracks = await withReauth(
          (newToken) => getFavoriteTracks(newToken),
          access,
          refresh,
          dispatch,
        );
        dispatch(setFavoriteTracks(tracks));
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
            setErrorRes(
              error.response.data?.message ||
                'Не удалось загрузить избранные треки',
            );
          } else if (error.request) {
            setErrorRes('Произошла ошибка. Попробуйте позже');
          } else {
            setErrorRes('Неизвестная ошибка');
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTracks();
  }, [access, refresh, pathname, router, dispatch]);

  // Отслеживаем изменение pathname для определения навигации
  useEffect(() => {
    if (pathname !== '/music/favorites') {
      isNavigatingAway.current = true;
    }
  }, [pathname]);

  // Если нет авторизации, не показываем контент
  if (!access) {
    return null;
  }

  return (
    <>
      <Centerblock
        tracks={favoriteTracks}
        isLoading={isLoading}
        errorRes={errorRes}
        title="Мои любимые треки"
      />
    </>
  );
}
