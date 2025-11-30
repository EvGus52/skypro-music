import { BASE_URL } from '../constants';
import axios from 'axios';

type regUserProps = {
  email: string;
  password: string;
  username: string;
};

type regUserReturn = {
  username: string;
  email: string;
  _id: number;
};

export const regUser = (data: regUserProps): Promise<regUserReturn> => {
  return axios.post(BASE_URL + '/user/signup/', data, {
    headers: {
      'content-type': 'application/json',
    },
  });
};
