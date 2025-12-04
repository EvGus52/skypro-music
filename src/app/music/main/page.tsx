'use client';

import Track from '@/components/Track/Track';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setTracks, setPageTitle } from '@/store/features/trackSlice';
import { useEffect, useState } from 'react';
import { getTracks } from '@/services/tracks/tracksApi';
import { AxiosError } from 'axios';

export default function Home() {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((state) => state.tracks.tracks);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(setPageTitle('Треки'));
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    getTracks()
      .then((res) => {
        dispatch(setTracks(res));
        setError('');
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response) {
            setError(
              error.response.data?.message ||
                error.response.data ||
                'Ошибка при загрузке треков',
            );
          } else if (error.request) {
            setError('Что-то с интернетом');
          } else {
            setError('Неизвестная ошибка');
          }
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div style={{ color: 'white' }}>Загрузка треков...</div>;
  }

  return <Track tracks={tracks} playlist={tracks} />;
}
