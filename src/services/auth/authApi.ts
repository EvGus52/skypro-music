import { BASE_URL } from '../constants';
import axios, { AxiosResponse } from 'axios';

type authUserProps = {
  email: string;
  password: string;
};

type authUserReturn = {
  email: string;
  password: string;
  _id: number;
};

export const authUser = (
  data: authUserProps,
): Promise<AxiosResponse<authUserReturn>> => {
  return axios.post<authUserReturn>(BASE_URL + '/user/login/', data, {
    headers: {
      'content-type': 'application/json',
    },
  });
};
