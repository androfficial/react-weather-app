import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './slices';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
