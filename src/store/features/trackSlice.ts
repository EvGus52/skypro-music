import { TrackType } from '@/sharedTypes/sharedTypes';
import { applyFilters } from '@/utils/applyFilters';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type initialStateType = {
  currentTrack: TrackType | null;
  isPlay: boolean;
  playlist: TrackType[];
  shaffledPlaylist: TrackType[];
  isShaffle: boolean;
  allTracks: TrackType[];
  pagePlaylist: TrackType[];
  filteredTracks: TrackType[];
  favoriteTracks: TrackType[];
  fetchError: null | string;
  fetchIsLoading: boolean;
  filters: {
    authors: string[];
    genres: string[];
    years: string;
  };
};

const initialState: initialStateType = {
  currentTrack: null,
  isPlay: false,
  isShaffle: false,
  playlist: [],
  shaffledPlaylist: [],
  allTracks: [],
  pagePlaylist: [],
  filteredTracks: [],
  favoriteTracks: [],
  fetchError: null,
  fetchIsLoading: true,
  filters: {
    authors: [],
    genres: [],
    years: 'По умолчанию',
  },
};

const trackSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<TrackType>) => {
      state.currentTrack = action.payload;
    },
    setCurrentPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      const playlist = Array.isArray(action.payload) ? action.payload : [];
      state.playlist = playlist;
      state.shaffledPlaylist = [...playlist].sort(() => Math.random() - 0.5);
    },
    setIsPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlay = action.payload;
    },
    toggleShuffle: (state) => {
      state.isShaffle = !state.isShaffle;
    },
    setNextTrack: (state) => {
      const list = state.isShaffle ? state.shaffledPlaylist : state.playlist;
      if (!state.currentTrack || list.length === 0) return;
      const curIndex = list.findIndex(
        (el) => el._id === state.currentTrack?._id,
      );
      if (curIndex === -1) {
        state.currentTrack = list[0];
        return;
      }
      const nextIndexTrack = state.isShaffle
        ? (curIndex + 1) % list.length
        : Math.min(curIndex + 1, list.length - 1);
      state.currentTrack = list[nextIndexTrack];
    },
    setPrevTrack: (state) => {
      const list = state.isShaffle ? state.shaffledPlaylist : state.playlist;
      if (!state.currentTrack || list.length === 0) return;
      const curIndex = list.findIndex(
        (el) => el._id === state.currentTrack?._id,
      );
      if (curIndex === -1) {
        state.currentTrack = list[0];
        return;
      }
      const prevIndexTrack = state.isShaffle
        ? (curIndex - 1 + list.length) % list.length
        : Math.max(0, curIndex - 1);
      state.currentTrack = list[prevIndexTrack];
    },
    setAllTracks: (state, action: PayloadAction<TrackType[]>) => {
      state.allTracks = action.payload;
    },
    setFavoriteTracks: (state, action: PayloadAction<TrackType[]>) => {
      state.favoriteTracks = action.payload;
    },
    addLikedTracks: (state, action: PayloadAction<TrackType>) => {
      if (!state.favoriteTracks.find((t) => t._id === action.payload._id)) {
        state.favoriteTracks = [...state.favoriteTracks, action.payload];
      }
    },
    removeLikedTracks: (state, action: PayloadAction<TrackType>) => {
      state.favoriteTracks = state.favoriteTracks.filter(
        (t) => t._id !== action.payload._id,
      );
    },
    setFetchError: (state, action: PayloadAction<string>) => {
      state.fetchError = action.payload;
    },
    setFetchIsLoading: (state, action: PayloadAction<boolean>) => {
      state.fetchIsLoading = action.payload;
    },
    setPagePlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.pagePlaylist = action.payload;
      // Сбрасываем фильтры при переходе на другую страницу
      state.filters.authors = [];
      state.filters.genres = [];
      state.filteredTracks = action.payload;
    },
    setFilterAuthors: (state, action: PayloadAction<string>) => {
      const author = action.payload;
      if (state.filters.authors.includes(author)) {
        state.filters.authors = state.filters.authors.filter((el) => {
          return el !== author;
        });
      } else {
        state.filters.authors = [...state.filters.authors, author];
      }
      state.filteredTracks = applyFilters(state);
    },
    setFilterGenres: (state, action: PayloadAction<string>) => {
      const genres = action.payload;
      if (state.filters.genres.includes(genres)) {
        state.filters.genres = state.filters.genres.filter((el) => {
          return el !== genres;
        });
      } else {
        state.filters.genres = [...state.filters.genres, genres];
      }
      state.filteredTracks = applyFilters(state);
    },
  },
});

export const {
  setCurrentTrack,
  setIsPlay,
  toggleShuffle,
  setCurrentPlaylist,
  setNextTrack,
  setPrevTrack,
  setAllTracks,
  setFavoriteTracks,
  addLikedTracks,
  removeLikedTracks,
  setFetchError,
  setFetchIsLoading,
  setPagePlaylist,
  setFilterAuthors,
  setFilterGenres,
} = trackSlice.actions;
export const trackSliceReducer = trackSlice.reducer;
