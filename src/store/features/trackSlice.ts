import { TrackType } from '@/sharedTypes/sharedTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  currentTrack: TrackType | null;
  isPlay: boolean;
  playlist: TrackType[];
  shaffledPlaylist: TrackType[];
  isShaffle: boolean;
  tracks: TrackType[];
  pageTitle: string;
};

const initialState: initialStateType = {
  currentTrack: null,
  isPlay: false,
  isShaffle: false,
  playlist: [],
  shaffledPlaylist: [],
  tracks: [],
  pageTitle: 'Треки',
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
    setTracks: (state, action: PayloadAction<TrackType[]>) => {
      state.tracks = action.payload;
    },
    setPageTitle: (state, action: PayloadAction<string>) => {
      state.pageTitle = action.payload;
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
  setTracks,
  setPageTitle,
} = trackSlice.actions;
export const trackSliceReducer = trackSlice.reducer;
