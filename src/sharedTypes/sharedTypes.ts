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

export type ApiErrorResponse = {
  message?: string;
  [key: string]: unknown;
};

export type CategoryResponse = {
  data: {
    name: string;
    items: number[];
  };
};

export type CenterBlockProps = {
  tracks: TrackType[];
  isLoading: boolean;
  errorRes: string | null;
  title: string;
};

export type createUserProp = {
  email: string;
  password: string;
};
