import axios from './axios';

export const getProduct = async () => {
  return axios.get('data.json').then((res) => res.data.article);
};
