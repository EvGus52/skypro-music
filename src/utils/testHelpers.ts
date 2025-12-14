import { TrackType } from '@/sharedTypes/sharedTypes';
import { initialStateType } from '@/store/features/trackSlice';
import { configureStore } from '@reduxjs/toolkit';
import { trackSliceReducer } from '@/store/features/trackSlice';

// Создание мокового трека
export const createMockTrack = (
  id: number,
  name: string,
  author: string,
  releaseDate: string,
  genre: string[],
): TrackType => ({
  _id: id,
  name,
  author,
  release_date: releaseDate,
  genre,
  duration_in_seconds: 180,
  album: 'Test Album',
  logo: null,
  track_file: 'test.mp3',
  stared_user: [],
});

// Создание мокового состояния для applyFilters
export const createMockState = (
  pagePlaylist: TrackType[],
  filters: Partial<initialStateType['filters']> = {},
): initialStateType => ({
  currentTrack: null,
  isPlay: false,
  playlist: [],
  shaffledPlaylist: [],
  isShaffle: false,
  allTracks: [],
  pagePlaylist,
  filteredTracks: [],
  favoriteTracks: [],
  fetchError: null,
  fetchIsLoading: false,
  filters: {
    authors: [],
    genres: [],
    years: 'По умолчанию',
    searchQuery: '',
    ...filters,
  },
});

// Создание тестового Redux store
export const createTestStore = () => {
  return configureStore({
    reducer: {
      tracks: trackSliceReducer,
    },
  });
};

// Моки для компонентов
export const mockTracks: TrackType[] = [
  {
    _id: 1,
    name: 'Track 1',
    author: 'Author 1',
    release_date: '2020-01-01',
    genre: ['Rock'],
    duration_in_seconds: 180,
    album: 'Album 1',
    logo: null,
    track_file: 'track1.mp3',
    stared_user: [],
  },
  {
    _id: 2,
    name: 'Track 2',
    author: 'Author 2',
    release_date: '2021-01-01',
    genre: ['Pop'],
    duration_in_seconds: 200,
    album: 'Album 2',
    logo: null,
    track_file: 'track2.mp3',
    stared_user: [],
  },
];
