import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './reservations/reservations';
import itemsReducer from './items/items';

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    items: itemsReducer,
  },
});

export default store;
