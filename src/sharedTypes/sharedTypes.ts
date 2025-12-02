export type TrackType = {
  _id: number;
  name: string;
  author: string;
  release_date: string;
  genre: string[];
  duration_in_seconds: number;
  album: string;
  logo: string | null;
  track_file: string;
  stared_user: number[];
};

export type SelectionType = {
  _id: number;
  name: string;
  items: number[]; // Массив ID треков
};

export type ApiErrorResponse = {
  message?: string;
  [key: string]: unknown;
};
