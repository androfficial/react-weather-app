/* eslint-disable @typescript-eslint/no-use-before-define */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';

import { weatherAPI } from '../../services/api';
import {
  IBadResponse,
  IGetWeather,
  ILocation,
  IOneCall,
  IResponse,
  IState,
  IWeather,
} from '../../types/weather';

export const fetchCurrentWeather = createAsyncThunk(
  'weather/fetchCurrentWeather',
  async (payload: IGetWeather, { rejectWithValue, dispatch }) => {
    const { lat, lon, city } = payload;
    try {
      const currentWeather = await weatherAPI.getCurrentWeather(lat, lon, city);

      if (currentWeather.statusText !== 'OK') {
        throw new Error('Failed to get current weather');
      }

      dispatch(setCurrentWeather(currentWeather));

      const { lat: latitude, lon: longitude } = currentWeather.data.coord;

      const oneCallWeather = await weatherAPI.getOneCallWeather(
        latitude,
        longitude
      );

      if (oneCallWeather.statusText !== 'OK') {
        throw new Error('Failed to get weather with one call');
      }

      return oneCallWeather;
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response);
      }
      return rejectWithValue(error);
    }
  }
);

const initialState: IState = {
  weather: {} as IWeather,
  oneCallWeather: {} as IOneCall,
  location: {
    access: true,
    message: '',
  },
  showModal: false,
  isLoading: true,
  response: {} as IResponse,
};

export const currentWeatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrentWeather: (
      state,
      action: PayloadAction<AxiosResponse<IWeather>>
    ) => {
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    setLocation: (state, action: PayloadAction<ILocation>) => {
      state.isLoading = false;
      state.location = action.payload;
    },
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {
    [fetchCurrentWeather.fulfilled.type]: (
      state,
      action: PayloadAction<AxiosResponse<IOneCall>>
    ) => {
      state.isLoading = false;
      state.oneCallWeather = action.payload.data;
      state.location = {
        access: true,
        message: '',
      };
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    [fetchCurrentWeather.rejected.type]: (
      state,
      action: PayloadAction<AxiosResponse<IBadResponse>>
    ) => {
      const cityNotFound = action.payload.data.message === 'city not found';

      state.showModal = cityNotFound;
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.data.message,
      };
    },
  },
});

export const { setCurrentWeather, setLocation, setShowModal, setIsLoading } =
  currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
