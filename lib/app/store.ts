import { configureStore } from '@reduxjs/toolkit';

import kpopReducer from '../slice';

export const store = configureStore({
  reducer: {
    kpop: kpopReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
