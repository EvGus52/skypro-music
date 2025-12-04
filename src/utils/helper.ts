import { TrackType } from '@/sharedTypes/sharedTypes';
import {
  setAccessToken,
  setRefreshToken,
  setUsername,
} from '@/store/features/authSlice';
import { useAppDispatch } from '@/store/store';
import { useEffect } from 'react';

export function getUniqueValuesByKey(
  arr: TrackType[],
  key: keyof TrackType,
): string[] {
  // Используем Set для хранения уникальных значений
  const uniqueValues = new Set<string>();
  // Проходим по каждому объекту в массиве
  arr.forEach((item) => {
    const value = item[key];
    // Если значение - массив строк
    if (Array.isArray(value)) {
      value.forEach((v) => {
        if (typeof v === 'string') {
          uniqueValues.add(v);
        }
      });
    }
    // Если значение - строка
    else if (typeof value === 'string') {
      uniqueValues.add(value);
    }
  });

  // Преобразуем Set в массив и возвращаем
  return Array.from(uniqueValues);
}

export function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const inputSeconds = Math.floor(time % 60);
  const outputSeconds = inputSeconds < 10 ? `0${inputSeconds}` : inputSeconds;
  return `${minutes}:${outputSeconds}`;
}

export const getTimePanel = (
  currentTime: number,
  totalTime: number | undefined,
) => {
  if (totalTime) {
    return `${formatTime(currentTime)} / ${formatTime(totalTime)}`;
  }
};
//Хук для инициализации данных при авторизации
export const useInitAuth = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const access = localStorage.getItem('access') || '';
    const refresh = localStorage.getItem('refresh') || '';
    const username = localStorage.getItem('username') || '';

    dispatch(setAccessToken(access));
    dispatch(setRefreshToken(refresh));
    dispatch(setUsername(username));
  }, [dispatch]);
};
