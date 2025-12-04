import { BASE_URL } from '../constants';
import { TrackType, CategoryResponse } from '@/sharedTypes/sharedTypes';
import axios from 'axios';

export const getTracks = (): Promise<TrackType[]> => {
  return axios(BASE_URL + '/catalog/track/all/').then((res) => {
    return res.data.data;
  });
};

export const getCategories = (
  categoryId: string,
): Promise<CategoryResponse> => {
  return axios(BASE_URL + `/catalog/selection/${Number(categoryId) + 1}`).then(
    (res) => {
      return res.data;
    },
  );
};
