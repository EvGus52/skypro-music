'use client';

import { getTracks } from '@/services/tracks/tracksApi';
import {
  setAllTracks,
  setFetchError,
  setFetchIsLoading,
} from '@/store/features/trackSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useEffect } from 'react';
import { AxiosError } from 'axios';

export default function FetchingTracks() {
  const dispatch = useAppDispatch();
  const { allTracks } = useAppSelector((state) => state.tracks);

  useEffect(() => {
    // Если треки уже загружены, не делаем повторный запрос
    if (allTracks.length > 0) {
      return;
    }

    dispatch(setFetchIsLoading(true));
    getTracks()
      .then((res) => {
        dispatch(setAllTracks(res));
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response) {
            dispatch(setFetchError(error.response.data));
          } else if (error.request) {
            dispatch(setFetchError('Произошла ошибка, попробуйте позже'));
          } else {
            dispatch(setFetchError('Неизвестная ошибка'));
          }
        }
      })
      .finally(() => {
        dispatch(setFetchIsLoading(false));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
}
