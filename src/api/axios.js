import Axios from 'axios';

const config = {
  baseURL: process.env.PUBLIC_URL,
};

const axios = Axios.create(config);

export default axios;
