'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { TrackType } from '@/sharedTypes/sharedTypes';

interface MusicLayoutContextType {
  title: string;
  setTitle: (title: string) => void;
  tracks: TrackType[];
  setTracks: (tracks: TrackType[]) => void;
}

const MusicLayoutContext = createContext<MusicLayoutContextType | undefined>(
  undefined,
);

export function MusicLayoutProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState('Треки');
  const [tracks, setTracks] = useState<TrackType[]>([]);

  return (
    <MusicLayoutContext.Provider value={{ title, setTitle, tracks, setTracks }}>
      {children}
    </MusicLayoutContext.Provider>
  );
}

export function useMusicLayout() {
  const context = useContext(MusicLayoutContext);
  if (context === undefined) {
    throw new Error('useMusicLayout must be used within a MusicLayoutProvider');
  }
  return context;
}
