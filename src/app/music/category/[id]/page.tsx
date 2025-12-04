'use client';

import Centerblock from '@/components/Centerblock/Centerblock';
import { TrackType } from '@/sharedTypes/sharedTypes';
import { useAppSelector } from '@/store/store';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { AxiosError } from 'axios';
import { getCategories } from '@/services/tracks/tracksApi';

export default function Category() {
  const params = useParams<{ id: string }>();
  const { allTracks, fetchIsLoading, fetchError } = useAppSelector(
    (state) => state.tracks,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [errorRes, setErrorRes] = useState<string | null>(null);
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [title, setTitle] = useState<string>('');
  const id = params.id;

  useEffect(() => {
    setIsLoading(true);
    if (!fetchIsLoading && allTracks.length) {
      getCategories(id)
        .then((res) => {
          setTitle(res.data.name);
          const tracksIds = res.data.items;
          const resultTracks = allTracks.filter((el) =>
            tracksIds.includes(el._id),
          );
          setTracks(resultTracks);
        })
        .catch((error) => {
          if (error instanceof AxiosError)
            if (error.response) {
              setErrorRes(error.response.data);
            } else if (error.request) {
              setErrorRes('Произошла ошибка');
            }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [fetchIsLoading]);

  return (
    <>
      <Centerblock
        errorRes={errorRes || fetchError}
        tracks={tracks}
        isLoading={isLoading}
        title={title}
      />
    </>
  );
}
