'use client';

import Track from '@/components/Track/Track';
import { useMusicLayout } from '@/context/MusicLayoutContext';
import { useEffect, useState } from 'react';
import { getTracks } from '@/services/tracks/tracksApi';
import { AxiosError } from 'axios';

export default function Home() {
  const { setTracks, setTitle, tracks } = useMusicLayout();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTitle('Треки');
  }, [setTitle]);

  useEffect(() => {
    setIsLoading(true);
    getTracks()
      .then((res) => {
        setTracks(res);
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
  }, [setTracks]);

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div style={{ color: 'white' }}>Загрузка треков...</div>;
  }

  return <Track tracks={tracks} playlist={tracks} />;
}
