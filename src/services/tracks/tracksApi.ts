import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';
import { TrackType, SelectionType } from '@/sharedTypes/sharedTypes';

type ApiResponse<T> = {
  data: T;
};

export const getTracks = (): Promise<TrackType[]> => {
  return axios
    .get<ApiResponse<TrackType[]>>(BASE_URL + '/catalog/track/all/')
    .then((res: AxiosResponse<ApiResponse<TrackType[]>>) => {
      return res.data.data;
    });
};

export const getSelectionsAll = (): Promise<SelectionType[]> => {
  return axios
    .get<ApiResponse<SelectionType[]>>(BASE_URL + '/catalog/selection/all/')
    .then((res: AxiosResponse<ApiResponse<SelectionType[]>>) => {
      return res.data.data;
    });
};

export const getSelectionById = (id: number): Promise<SelectionType> => {
  return axios
    .get<ApiResponse<ApiResponse<SelectionType>>>(
      BASE_URL + `/catalog/selection/${id}/`,
    )
    .then((res: AxiosResponse<ApiResponse<ApiResponse<SelectionType>>>) => {
      return res.data.data?.data || res.data.data;
    });
};
