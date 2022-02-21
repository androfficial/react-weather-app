import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    units: 'metric',
    lang: 'ru',
    appid: process.env.REACT_APP_API_KEY,
  },
});
