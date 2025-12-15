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
import { toast } from 'react-toastify';

export default function FetchingTracks() {
  const dispatch = useAppDispatch();
  const { allTracks } = useAppSelector((state) => state.tracks);

  useEffect(() => {
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
          let errorMessage = 'Неизвестная ошибка';
          if (error.response) {
            errorMessage =
              typeof error.response.data === 'string'
                ? error.response.data
                : error.response.data?.message || 'Ошибка при загрузке треков';
            dispatch(setFetchError(errorMessage));
          } else if (error.request) {
            errorMessage = 'Произошла ошибка, попробуйте позже';
            dispatch(setFetchError(errorMessage));
          } else {
            dispatch(setFetchError(errorMessage));
          }
          toast.error(errorMessage);
        }
      })
      .finally(() => {
        dispatch(setFetchIsLoading(false));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
}
