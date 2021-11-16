/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchReservations from './fetchReservations';

export const getReservations = createAsyncThunk(
  'reservations/getReservations',
  async (username) => {
    const reservations = await fetchReservations(username);
    return reservations.map(
      ({
        id,
        user_id: userId,
        item_id: itemId,
        start_date: startDate,
        end_date: endDate,
      }) => ({
        id,
        userId,
        itemId,
        startDate,
        endDate,
      }),
    );
  },
);

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: {
    reservations: [],
    status: null,
  },
  extraReducers: {
    [getReservations.pending]: (state) => {
      state.status = 'loading';
    },
    [getReservations.fulfilled]: (state, { payload }) => {
      state.reservations = payload;
      state.status = 'success';
    },
    [getReservations.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default reservationsSlice.reducer;
