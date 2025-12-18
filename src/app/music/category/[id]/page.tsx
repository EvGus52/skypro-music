'use client';

import Centerblock from '@/components/Centerblock/Centerblock';
import { TrackType } from '@/sharedTypes/sharedTypes';
import { useAppSelector, useAppDispatch } from '@/store/store';
import { setPagePlaylist } from '@/store/features/trackSlice';
import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { AxiosError } from 'axios';
import { getCategories } from '@/services/tracks/tracksApi';
import { toast } from 'react-toastify';

export default function Category() {
  const dispatch = useAppDispatch();
  const params = useParams<{ id: string }>();
  const { allTracks, fetchIsLoading, fetchError } = useAppSelector(
    (state) => state.tracks,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [title, setTitle] = useState<string>('');
  const [tracksIds, setTracksIds] = useState<number[]>([]);
  const id = params.id;

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);

    if (!fetchIsLoading && allTracks.length) {
      getCategories(id)
        .then((res) => {
          setTitle(res.data.name);
          setTracksIds(res.data.items);
        })
        .catch((error) => {
          if (error instanceof AxiosError) {
            if (error.response) {
              const errorData = error.response.data;
              toast.error(
                typeof errorData === 'string'
                  ? errorData
                  : errorData?.message ||
                      'Произошла ошибка при загрузке подборки',
              );
            } else if (error.request) {
              toast.error('Произошла ошибка при подключении к серверу');
            } else {
              toast.error('Произошла ошибка');
            }
          } else {
            toast.error('Произошла неизвестная ошибка');
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else if (!fetchIsLoading && !allTracks.length) {
      setIsLoading(false);
      toast.error('Треки не загружены');
    }
  }, [fetchIsLoading, id, allTracks]);

  const filteredTracks = useMemo(() => {
    if (!tracksIds || tracksIds.length === 0) return [];
    return allTracks.filter((el) => tracksIds.includes(el._id));
  }, [allTracks, tracksIds]);

  useEffect(() => {
    if (filteredTracks.length > 0 || tracksIds.length === 0) {
      setTracks(filteredTracks);
      if (filteredTracks.length > 0) {
        dispatch(setPagePlaylist(filteredTracks));
      }
    }
  }, [filteredTracks, tracksIds.length, dispatch]);

  return (
    <>
      <Centerblock
        errorRes={fetchError}
        tracks={tracks}
        isLoading={isLoading}
        title={title}
      />
    </>
  );
}
