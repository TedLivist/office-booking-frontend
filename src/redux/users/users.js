/* eslint-disable no-param-reassign */
import { createAction, createSlice } from '@reduxjs/toolkit';

export const getUsername = createAction('users/getUsername', () => ({
  payload: {
    username: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).user : null,
  },
}));

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    username: '',
    token: '',
  },
  extraReducers: {
    [getUsername]: (state, { payload }) => {
      state.username = payload;
    },
  },
});

export default usersSlice.reducer;
