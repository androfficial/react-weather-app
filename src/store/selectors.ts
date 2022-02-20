import { RootState } from './slices/index';

export const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherSliceReducer;
