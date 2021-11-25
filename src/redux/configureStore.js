import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reservationsReducer from './reservations/reservations';
import itemsReducer from './items/items';
import usersReducer from './users/users';

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    items: itemsReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
