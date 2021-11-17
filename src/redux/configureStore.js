import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reservationsReducer from './reservations/reservations';
import itemsReducer from './items/items';

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    items: itemsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
