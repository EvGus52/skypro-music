import { TrackType } from '@/sharedTypes/sharedTypes';
import { initialStateType } from '@/store/features/trackSlice';

export const applyFilters = (state: initialStateType): TrackType[] => {
  let filteredPlaylist = [...state.pagePlaylist];

  if (state.filters.searchQuery.length >= 3) {
    const query = state.filters.searchQuery.toLowerCase();
    filteredPlaylist = filteredPlaylist.filter((track) =>
      track.name.toLowerCase().includes(query),
    );
  }

  if (state.filters.authors.length) {
    filteredPlaylist = filteredPlaylist.filter((track) =>
      state.filters.authors.includes(track.author),
    );
  }

  if (state.filters.genres.length) {
    filteredPlaylist = filteredPlaylist.filter((track) =>
      state.filters.genres.some((el) => track.genre.includes(el)),
    );
  }

  if (state.filters.years !== 'По умолчанию') {
    filteredPlaylist.sort((a, b) => {
      const dateA = new Date(a.release_date).getTime();
      const dateB = new Date(b.release_date).getTime();

      if (state.filters.years === 'Сначала новые') {
        return dateB - dateA;
      }
      if (state.filters.years === 'Сначала старые') {
        return dateA - dateB;
      }
      return 0;
    });
  }

  return filteredPlaylist;
};
