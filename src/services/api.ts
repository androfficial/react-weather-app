import { AxiosResponse } from 'axios';

import { IWeather } from '../types/weather';
import { instance } from './config';

export const weatherAPI = {
  getCurrentWeather(
    lat?: number,
    lon?: number,
    city?: string
  ): Promise<AxiosResponse<IWeather>> {
    return instance.get<IWeather>(`/weather?`, {
      params: {
        lat,
        lon,
        q: city,
      },
    });
  },
  getOneCallWeather(lat?: number, lon?: number) {
    return instance.get(`/onecall?`, {
      params: {
        exclude: 'minutely',
        lat,
        lon,
      },
    });
  },
};
