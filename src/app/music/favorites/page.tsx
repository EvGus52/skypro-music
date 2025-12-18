'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/store/store';
import Centerblock from '@/components/Centerblock/Centerblock';
import { getFavoriteTracks } from '@/services/tracks/tracksApi';
import {
  setFavoriteTracks,
  setPagePlaylist,
} from '@/store/features/trackSlice';
import { withReauth } from '@/utils/withReAuth';
import { AxiosError } from 'axios';
import { useInitAuth } from '@/hooks/useInitAuth';
import { toast } from 'react-toastify';

export default function FavoritesPage() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isAuthInitialized = useInitAuth();
  const { access, refresh } = useAppSelector((state) => state.auth);
  const { favoriteTracks } = useAppSelector((state) => state.tracks);
  const [isLoading, setIsLoading] = useState(true);
  const isNavigatingAway = useRef(false);

  useEffect(() => {
    if (!isAuthInitialized) {
      return;
    }

    if (isNavigatingAway.current) {
      return;
    }

    if (!access) {
      if (pathname === '/music/favorites') {
        router.push('/auth/signin');
      }
      return;
    }

    if (favoriteTracks.length > 0) {
      setIsLoading(false);
      dispatch(setPagePlaylist(favoriteTracks));
      return;
    }

    setIsLoading(true);

    const loadTracks = async () => {
      try {
        const tracks = await withReauth(
          (newToken) => getFavoriteTracks(newToken),
          access,
          refresh,
          dispatch,
        );
        dispatch(setFavoriteTracks(tracks));
        dispatch(setPagePlaylist(tracks));
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
            toast.error(
              error.response.data?.message ||
                'Не удалось загрузить избранные треки',
            );
          } else if (error.request) {
            toast.error('Произошла ошибка. Попробуйте позже');
          } else {
            toast.error('Неизвестная ошибка');
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTracks();
  }, [
    isAuthInitialized,
    access,
    refresh,
    pathname,
    router,
    dispatch,
    favoriteTracks.length,
  ]);

  useEffect(() => {
    if (pathname !== '/music/favorites') {
      isNavigatingAway.current = true;
    }
  }, [pathname]);

  if (!isAuthInitialized) {
    return (
      <>
        <Centerblock
          tracks={[]}
          isLoading={true}
          errorRes={null}
          title="Мои любимые треки"
        />
      </>
    );
  }

  if (!access) {
    return null;
  }

  return (
    <>
      <Centerblock
        tracks={favoriteTracks}
        isLoading={isLoading}
        errorRes={null}
        title="Мои любимые треки"
      />
    </>
  );
}
