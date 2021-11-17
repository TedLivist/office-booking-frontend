import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reservationsReducer from './reservations/reservations';
import itemsReducer from './items/items';
import deleteReducer from './deleteLists/deleteLists'

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    items: itemsReducer,
    deleteReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
