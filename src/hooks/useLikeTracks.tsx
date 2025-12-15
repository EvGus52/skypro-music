'use client';

import { useState, useMemo, useCallback } from 'react';
import { AxiosError } from 'axios';
import { TrackType } from '@/sharedTypes/sharedTypes';
import { useAppSelector, useAppDispatch } from '@/store/store';
import { addLikedTracks, removeLikedTracks } from '@/store/features/trackSlice';
import { withReauth } from '@/utils/withReAuth';
import { addLike, removeLike } from '@/services/tracks/tracksApi';
import { toast } from 'react-toastify';

type returnTypeHook = {
  isLoading: boolean;
  toggleLike: () => void;
  isLike: boolean;
};

export const useLikeTrack = (track: TrackType | null): returnTypeHook => {
  const { favoriteTracks } = useAppSelector((state) => state.tracks);
  const { access, refresh } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const isLike = useMemo(
    () => favoriteTracks.some((t) => t._id === track?._id),
    [favoriteTracks, track?._id],
  );

  const [isLoading, setIsLoading] = useState(false);

  const toggleLike = useCallback(() => {
    if (!access) {
      toast.error('Нет авторизации');
      return;
    }

    const actionApi = isLike ? removeLike : addLike;
    const actionSlice = isLike ? removeLikedTracks : addLikedTracks;

    setIsLoading(true);
    if (track) {
      withReauth(
        (newToken) => actionApi(newToken, track._id),
        access,
        refresh,
        dispatch,
      )
        .then(() => {
          dispatch(actionSlice(track));
          toast.success(
            isLike
              ? 'Трек удален из избранного'
              : 'Трек добавлен в избранное',
          );
        })
        .catch((error) => {
          if (error instanceof AxiosError) {
            if (error.response) {
              toast.error(error.response.data.message || 'Произошла ошибка');
            } else if (error.request) {
              toast.error('Произошла ошибка. Попробуйте позже');
            } else {
              toast.error('Неизвестная ошибка');
            }
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [access, refresh, dispatch, track, isLike]);

  return {
    isLoading,
    toggleLike,
    isLike,
  };
};
