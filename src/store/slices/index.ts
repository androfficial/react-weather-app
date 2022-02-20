import { combineReducers } from '@reduxjs/toolkit';

import currentWeatherSliceReducer from './currentWeather';

export const rootReducer = combineReducers({
  currentWeatherSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
