import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import photoReducer from '../photoSlice';
import resultReducer from '../resultSlice';
import headReducer from '../headSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    photo: photoReducer,
    result: resultReducer,
    head: headReducer,
  },
});
