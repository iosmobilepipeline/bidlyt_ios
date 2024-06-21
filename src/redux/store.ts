/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import { appOperation } from '../services/apiServices';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: {
        extraArgument: { appOperation },
      },
    }),
});

export default store;
