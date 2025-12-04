'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  getSelectionsAll,
  getSelectionById,
  getTracks,
} from '@/services/tracks/tracksApi';
import { AxiosError } from 'axios';
import Track from '@/components/Track/Track';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setTracks, setPageTitle } from '@/store/features/trackSlice';

export default function CategoryPage() {
  const params = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((state) => state.tracks.tracks);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSelection = async () => {
      if (!params.id) return;

      setIsLoading(true);
      setError('');
      dispatch(setTracks([]));

      try {
        const allSelections = await getSelectionsAll();
        const selectionId = Number(params.id) + 1;
        const foundSelection = allSelections.find(
          (sel) => sel._id === selectionId,
        );

        if (!foundSelection) {
          setError('Подборка не найдена');
          setIsLoading(false);
          return;
        }

        const selectionData = await getSelectionById(foundSelection._id);
        const allTracks = await getTracks();
        const trackIds = selectionData?.items || [];
        const selectionTracks = allTracks.filter((track) =>
          trackIds.includes(track._id),
        );

        if (selectionTracks.length > 0) {
          const pageTitle =
            selectionData?.name || foundSelection?.name || 'Подборка';
          dispatch(setPageTitle(pageTitle));
          dispatch(setTracks(selectionTracks));
        } else {
          dispatch(setTracks([]));
          setError('Не удалось загрузить треки подборки');
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
            setError(
              error.response.data?.message ||
                error.response.data ||
                'Ошибка при загрузке подборки',
            );
          } else if (error.request) {
            setError('Что-то с интернетом');
          } else {
            setError('Неизвестная ошибка');
          }
        } else {
          setError('Неизвестная ошибка');
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadSelection();
  }, [params.id, dispatch]);

  if (error) {
    return <div style={{ color: 'white' }}>{error}</div>;
  }

  if (isLoading) {
    return <div style={{ color: 'white' }}>Загрузка подборки...</div>;
  }

  if (!tracks || tracks.length === 0) {
    return <div style={{ color: 'white' }}>В подборке нет треков</div>;
  }

  return <Track tracks={tracks} playlist={tracks} />;
}
