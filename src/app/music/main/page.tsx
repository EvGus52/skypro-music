'use client';

import Centerblock from '@/components/Centerblock/Centerblock';
import { useAppSelector, useAppDispatch } from '@/store/store';
import { setPagePlaylist } from '@/store/features/trackSlice';
import { useEffect } from 'react';

export default function MainPage() {
  const dispatch = useAppDispatch();
  const { fetchError, fetchIsLoading, allTracks } = useAppSelector(
    (state) => state.tracks,
  );

  useEffect(() => {
    if (allTracks.length > 0) {
      dispatch(setPagePlaylist(allTracks));
    }
  }, [allTracks, dispatch]);

  return (
    <>
      <Centerblock
        tracks={allTracks}
        isLoading={fetchIsLoading}
        errorRes={fetchError}
        title="Треки"
      />
    </>
  );
}
