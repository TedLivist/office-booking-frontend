/* eslint-disable no-param-reassign */
import { createAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from './usersAPI';

export const getUsername = createAction('users/getUsername', () => ({
  payload: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).user : null,

}));

export const logOut = createAction('users/logOut', () => ({
  payload: null,

}));

export const logUser = createAsyncThunk('users/logUser', async (username) => {
  const response = await login(username);
  return response;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    username: '',
    status: null,
  },
  extraReducers: {
    [getUsername]: (state, { payload }) => {
      state.username = payload;
    },
    [logOut]: (state, { payload }) => {
      state.username = payload;
    },
    [logUser.fulfilled]: (state, { payload }) => {
      state.username = payload.user;
      state.status = 'success';
    },
    [logUser.rejected]: (state) => {
      state.status = 'failed';
    },
    [logUser.pending]: (state) => {
      state.status = 'loading';
    },
  },
});

export default usersSlice.reducer;
