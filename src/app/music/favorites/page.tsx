'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/store/store';
import Centerblock from '@/components/Centerblock/Centerblock';
import { getFavoriteTracks } from '@/services/tracks/tracksApi';
import { setFavoriteTracks } from '@/store/features/trackSlice';
import { withReauth } from '@/utils/withReAuth';
import { AxiosError } from 'axios';

export default function FavoritesPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { access, refresh } = useAppSelector((state) => state.auth);
  const { favoriteTracks } = useAppSelector((state) => state.tracks);
  const [isLoading, setIsLoading] = useState(true);
  const [errorRes, setErrorRes] = useState<string | null>(null);

  useEffect(() => {
    // Проверка авторизации
    if (!access) {
      router.push('/auth/signin');
      return;
    }

    // Загрузка избранных треков
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access, refresh]);

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
